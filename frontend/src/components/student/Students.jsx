import React from "react";
import Student from "./Student";

const Students = ({ students }) => {
  return (
    <div className="d-flex align-items-center flex-wrap justify-content-center mt-3">
      {students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
};

export default Students;
