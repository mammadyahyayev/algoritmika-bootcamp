import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
  const [search, setSearch] = React.useState("");

  const searchLineChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={search}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!search}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
