import React from "react";
import StudentEditor from "../components/student/StudentEditor";
import Navbar from "../components/Navbar";

const StudentEditorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center">
        <StudentEditor />
      </div>
    </div>
  );
};

export default StudentEditorPage;
