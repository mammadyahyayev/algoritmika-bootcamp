import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

const Movies = ({ movies, onInsertFavorites }) => {
  return (
    <ul className="movies">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem movie={movie} onInsertFavorites={onInsertFavorites}/>
          </li>
        ))
      ) : (
        <div>Movies not found</div>
      )}
    </ul>
  );
};

export default Movies;
