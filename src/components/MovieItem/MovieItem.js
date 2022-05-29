import React from "react";
import "./MovieItem.css";

const MovieItem = ({movie, onInsertFavorites}) => {
  const { Title, Year, Poster } = movie;

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button type="button" className="movie-item__add-button" onClick={() => onInsertFavorites(movie)}>
          Insert to the favorites
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
