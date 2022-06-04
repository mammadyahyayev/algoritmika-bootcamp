import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentsPage from "./pages/StudentsPage";
import Student from "./components/student/Student";
import StudentEditorPage from "./pages/StudentEditorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<StudentsPage />} />
        <Route path="/students" exact element={<StudentsPage />} />
        <Route path="/add" exact element={<StudentEditorPage />} />
        <Route path="/edit/:id" exact element={<StudentEditorPage />} />
        <Route path="/students/:id" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
