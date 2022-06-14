import React from "react";
import "./SearchBox.css";

const SearchBox = ({ setMovies }) => {
  const [search, setSearch] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      alert("Please enter a title before search");
      return;
    }

    fetch(process.env.REACT_APP_MOVIE_API + `&s=${search.trim()}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response !== "False" && data.Search.length > 0) {
          setMovies(data.Search);
        } else {
          setMovies([])
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={onSubmit}>
        <label className="search-box__form-label">
          Search movie by title
          <input
            value={search}
            type="text"
            className="search-box__form-input"
            placeholder="For example, Shawshank Redemption"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!search}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
