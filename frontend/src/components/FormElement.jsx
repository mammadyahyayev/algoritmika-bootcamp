import React from "react";

const FormElement = ({ name, type }) => {
  const lowerCaseName = name.toLowerCase();
  return (
    <div className="form-group">
      <label for={lowerCaseName}>
        {name.substring(0, 1).toUpperCase() + lowerCaseName.substring(1)}
      </label>
      <input
        type={type}
        id={lowerCaseName}
        className="form-control"
        placeholder={`Enter your ${lowerCaseName}`}
      />
    </div>
  );
};

export default FormElement;
