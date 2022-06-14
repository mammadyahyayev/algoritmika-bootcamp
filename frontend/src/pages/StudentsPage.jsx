import React from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Students from "../components/student/Students";

const StudentsPage = () => {
  const [students, setStudents] = React.useState([]);
  const [filteredStudents, setFilteredStudents] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:9000/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const onStudentSearch = (query) => {
    const copiedStudents = [...students];

    const findedStudents = copiedStudents.filter((student) =>
      student.name.includes(query)
    );

    console.log(findedStudents)

    if (searchQuery.length !== 0) {
      setFilteredStudents(findedStudents);
      return;
    }

    setSearchQuery(query);
    setFilteredStudents(students);
  };

  const onRemoveAllStudents = () => {
    const isDelete = window.confirm("Are you sure to delete all students?");

    if (!isDelete) {
      return;
    }

    fetch("http://localhost:9000/api/students", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setStudents([]);
        }
      })
      .catch((err) => console.log(err));
  };

  const onRemoveStudent = (id) => {
    const isDelete = window.confirm("are you sure to delete this student?");

    if (!isDelete) return;

    const filteredStudents = students.filter((student) => student.id !== id);

    setStudents(filteredStudents);

    fetch(`http://localhost:9000/api/students/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("User deleted");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="StudentsPage">
      <Navbar />
      <div className="mt-4">
        <SearchBox onStudentSearch={onStudentSearch} />
      </div>
      <div className="d-flex justify-content-around mt-5">
        <h3>
          Students: {searchQuery ? filteredStudents.length : students.length}
        </h3>
        <button className="btn btn-danger" onClick={onRemoveAllStudents}>
          Remove All
        </button>
      </div>
      <Students
        students={searchQuery ? filteredStudents : students}
        onRemoveStudent={onRemoveStudent}
      />
    </div>
  );
};

export default StudentsPage;
