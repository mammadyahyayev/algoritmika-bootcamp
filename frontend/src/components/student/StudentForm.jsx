import React from "react";
import FormElement from "../FormElement";

const StudentForm = () => {
  return (
    <form className="col-md-6 mt-3">
      <FormElement name="name" type="text" />
      <FormElement name="surname" type="text" />
      <FormElement name="email" type="email" />
      <FormElement name="birthdate" type="date" />
      <button type="submit" className="btn btn-success float-right mt-2">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
