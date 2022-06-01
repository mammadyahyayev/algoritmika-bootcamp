import React from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Students from "../components/student/Students";

const StudentsPage = () => {
  return (
    <div className="StudentsPage">
      <Navbar />
      <div className="mt-4">
        <SearchBox />
      </div>
      <div className="d-flex justify-content-around mt-5">
        <h3>Students: 32</h3>
        <button className="btn btn-danger">Remove All</button>
      </div>
      <Students />
    </div>
  );
};

export default StudentsPage;
