import React from "react";
import FormElement from "../FormElement";

const StudentForm = () => {
  const [student, setStudent] = React.useState({
    name: "",
    surname: "",
    email: "",
    birthdate: "",
  });

  const onSubmitStudent = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const onChangeStudentData = (e) => {
    console.log(e.target.value);

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
        name="birthdate"
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
