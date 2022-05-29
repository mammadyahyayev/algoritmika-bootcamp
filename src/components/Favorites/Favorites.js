import React from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = ({ favoriteMovies }) => {
  const [disable, setDisable] = React.useState(false);
  const [favoriteList, setFavoriteList] = React.useState({
    id: 0,
    title: "",
  });

  const onChangeFavoriteList = (e) => {
    setFavoriteList({
      ...favoriteList,
      title: e.target.value,
    });
  };

  const onSaveFavoriteList = (e) => {
    e.preventDefault();

    const data = {
      title: favoriteList,
      movies: favoriteMovies,
    };

    fetch("https://acb-api.algoritmika.org/api/movies/list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setFavoriteList({
          ...favoriteList,
          id: data.id,
        });
      });
  };

  return (
    <div className="favorites">
      <input
        className="favorites__name"
        placeholder="Favorites list name"
        value={favoriteList.title}
        onChange={(e) => onChangeFavoriteList(e)}
      />
      <ul className="favorites__list">
        {favoriteMovies.map((item) => {
          return (
            <li key={item.imdbID}>
              {item.Title} ({item.Year})
            </li>
          );
        })}
      </ul>
      {favoriteList.id != 0 ? (
        <Link to={`/list/${favoriteList.id}`}>Go to list</Link>
      ) : (
        <button
          type="submit"
          className="search-box__form-submit"
          onClick={(e) => onSaveFavoriteList(e)}
          disabled={!favoriteList.title.trim()}
        >
          Save favorite list
        </button>
      )}
    </div>
  );
};

export default Favorites;
