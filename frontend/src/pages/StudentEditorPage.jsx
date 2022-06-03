import React from "react";
import StudentForm from "../components/student/StudentForm";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const StudentEditorPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center">
        <StudentForm studentId={id}/>
      </div>
    </div>
  );
};

export default StudentEditorPage;
