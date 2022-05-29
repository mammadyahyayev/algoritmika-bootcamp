import React from "react";
import { useParams } from "react-router-dom";
import "./ListPage.css";

const ListPage = () => {
  const { id } = useParams();

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
      .then((response) => response.json())
      .then(async (data) => {
        const movieArr = [];
        for (let item of data.movies) {
          await fetch(
            `http://www.omdbapi.com/?i=${item.imdbID}&apikey=20498255`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.Response != "False") {
                movieArr.push(data);
              }
            });
        }

        setMovies(movieArr);
      });
  }, []);

  return (
    <div className="list-page">
      <h1 className="list-page__title">My List</h1>
      <ul>
        {movies.length > 0 ? (
          movies.map((item) => (
            <li key={item.imdbID}>
              <a href="https://www.imdb.com/title/tt0068646/" target="_blank">
                {item.Title} ({item.Year})
              </a>
            </li>
          ))
        ) : (
          <div>No item found</div>
        )}
      </ul>
    </div>
  );
};

export default ListPage;
