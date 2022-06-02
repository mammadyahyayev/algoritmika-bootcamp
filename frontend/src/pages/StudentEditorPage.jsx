import React from "react";
import StudentForm from "../components/student/StudentForm";
import Navbar from "../components/Navbar";

const StudentEditorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center">
        <StudentForm />
      </div>
    </div>
  );
};

export default StudentEditorPage;
