import React from "react";
import { useNavigate } from "react-router-dom";
import FormElement from "../FormElement";

const StudentForm = ({ studentId }) => {
  const [student, setStudent] = React.useState({
    name: "",
    surname: "",
    email: "",
    birthDate: "",
  });

  const navigate = useNavigate();

  React.useEffect(() => {
    if (studentId) {
      fetch(`http://localhost:9000/api/students/${studentId}`)
        .then((response) => response.json())
        .then((data) => setStudent(data));
    }
  }, [studentId]);

  const onSubmitStudent = (e) => {
    e.preventDefault();

    let method = "POST";
    let url = "http://localhost:9000/api/students";
    if (studentId) {
      method = "PUT";
      url += `/${studentId}`;
    }

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    })
      .then((result) => {
        if (result.status === 200) {
          navigate("/students");
        }
      })
      .catch((err) => console.log(err));
  };

  const onChangeStudentData = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="col-md-6 mt-3">
      <FormElement
        name="name"
        type="text"
        value={student.name}
        onChange={onChangeStudentData}
      />
      <FormElement
        name="surname"
        type="text"
        value={student.surname}
        onChange={onChangeStudentData}
      />
      <FormElement
        name="email"
        type="email"
        value={student.email}
        onChange={onChangeStudentData}
      />
      <FormElement
        name="birthDate"
        type="date"
        value={student.birthDate}
        onChange={onChangeStudentData}
      />
      <button
        type="submit"
        className="btn btn-success float-right mt-2"
        onClick={onSubmitStudent}
      >
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
