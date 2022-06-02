import React from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Students from "../components/student/Students";

const StudentsPage = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:9000/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const onStudentSearch = (searchQuery) => {
    const copiedStudents = [...students];

    const findedStudents = copiedStudents.filter((student) =>
      student.name.includes(searchQuery)
    );

    console.log(findedStudents);
    return findedStudents;
  };

  return (
    <div className="StudentsPage">
      <Navbar />
      <div className="mt-4">
        <SearchBox onStudentSearch={onStudentSearch} />
      </div>
      <div className="d-flex justify-content-around mt-5">
        <h3>Students: {students.length}</h3>
        <button className="btn btn-danger">Remove All</button>
      </div>
      <Students students={students} />
    </div>
  );
};

export default StudentsPage;
