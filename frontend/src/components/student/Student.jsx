import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "../../assets/images/edit.png";
import DeleteIcon from "../../assets/images/delete.png";
import "./Student.css";

const Student = ({student}) => {
  return (
    <div className="student">
      <div className="student-info">
        <h5>{student.name + " " + student.surname}</h5>
        <p>{student.birthDate}</p>
        <p className="email">{student.email}</p>
      </div>
      <div className="student-action">
        <Link to={`/edit/${student.id}`} className="nav-link edit-icon">
          <img src={EditIcon} alt="edit icon" />
        </Link>
        <img src={DeleteIcon} alt="delete icon" />
      </div>
    </div>
  );
};

export default Student;
