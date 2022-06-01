import React from "react";

const SearchBox = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-4">
        <div className="input-group mb-3 d-flex align-items-center justify-content-center">
          <input
            type="text"
            className="form-control"
            placeholder="Search by student name"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
