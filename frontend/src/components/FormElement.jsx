import React from "react";

const FormElement = ({ name, type, value, onChange }) => {
  const lowerCaseName = name.toLowerCase();
  return (
    <div className="form-group">
      <label htmlFor={lowerCaseName}>
        {name.substring(0, 1).toUpperCase() + lowerCaseName.substring(1)}
      </label>
      <input
        className="form-control"
        type={type}
        id={lowerCaseName}
        name={lowerCaseName}
        placeholder={`Enter your ${lowerCaseName}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormElement;
