import React from "react";

const SearchBox = ({ onStudentSearch }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-4">
        <div className="input-group mb-3 d-flex align-items-center justify-content-center">
          <input
            type="text"
            className="form-control"
            placeholder="Search by student name"
            onChange={(e) => onStudentSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
