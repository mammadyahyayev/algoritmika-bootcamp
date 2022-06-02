import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "../../assets/images/edit.png";
import DeleteIcon from "../../assets/images/delete.png";
import "./Student.css";

const Student = () => {
  return (
    <div className="student">
      <div className="student-info">
        <h5>Samir Samirov</h5>
        <p>18.05.2000</p>
        <p className="email">samirsamirov@gmail.com</p>
      </div>
      <div className="student-action">
        <Link to={"/edit/1"} className="nav-link edit-icon">
          <img src={EditIcon} alt="edit icon" />
        </Link>
        <img src={DeleteIcon} alt="delete icon" />
      </div>
    </div>
  );
};

export default Student;
