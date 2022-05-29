import React, { Component } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";

const MainPage = () => {
  const [movies, setMovies] = React.useState([]);
  const [favoriteMovies, setFavoriteMovies] = React.useState([]);

  const onInsertFavorites = (movie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  };

  const onDeleteFavorite = (imdbId) => {
    console.log(imdbId);

    const clonedFavorites = [...favoriteMovies]

    const newFavorites = clonedFavorites.filter(item => item.imdbID != imdbId);

    setFavoriteMovies([...newFavorites]);
  };

  return (
    <div className="main-page">
      <Header />
      <main className="main-page__content">
        <section className="main-page__main-section">
          <div className="main-page__search-box">
            <SearchBox setMovies={setMovies} />
          </div>
          <div className="main-page__movies">
            <Movies movies={movies} onInsertFavorites={onInsertFavorites} />
          </div>
        </section>
        <aside className="main-page__favorites">
          <Favorites
            favoriteMovies={favoriteMovies}
            onDeleteFavorite={onDeleteFavorite}
          />
        </aside>
      </main>
    </div>
  );
};

export default MainPage;
