import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "../../assets/images/edit.png";
import DeleteIcon from "../../assets/images/delete.png";
import "./Student.css";

const Student = ({ student, onRemoveStudent }) => {
  const fullname = student.name + " " + student.surname;
  return (
    <div className="student">
      <div className="student-info">
        <h5 className="fullname" title={fullname}>
          {fullname}
        </h5>
        <p>{student.birthDate}</p>
        <p className="email">{student.email}</p>
      </div>
      <div className="student-action">
        <Link to={`/edit/${student.id}`} className="nav-link edit-icon">
          <img src={EditIcon} alt="edit icon" />
        </Link>
        <img
          src={DeleteIcon}
          alt="delete icon"
          onClick={() => onRemoveStudent(student.id)}
        />
      </div>
    </div>
  );
};

export default Student;
