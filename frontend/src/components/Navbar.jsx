import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Student Management
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/students"} className="nav-link">
              Students
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Student
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
