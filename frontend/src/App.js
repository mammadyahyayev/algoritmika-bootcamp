import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import StudentsPage from "./pages/StudentsPage";
import StudentEditor from "./components/student/StudentEditor";
import Student from "./components/student/Student";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/students" exact element={<StudentsPage />} />
        <Route path="/add" exact element={<StudentEditor />} />
        <Route path="/students/:id" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
