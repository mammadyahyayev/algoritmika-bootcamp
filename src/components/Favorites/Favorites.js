import React from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = ({ favoriteMovies, onDeleteFavorite }) => {
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

    fetch(process.env.REACT_APP_ALGORITMIKA_MOVIE_LIST_API, {
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
            <li
              className="favorite__item"
              key={item.imdbID}
            >
              <span>
                {item.Title} ({item.Year})
              </span>
              <button className="favorite-item__delete-btn" onClick={() => onDeleteFavorite(item.imdbID)}>x</button>
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
