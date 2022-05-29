import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

const Movies = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem {...movie} />
          </li>
        ))
      ) : (
        <div>Movies not found</div>
      )}
    </ul>
  );
};

export default Movies;
