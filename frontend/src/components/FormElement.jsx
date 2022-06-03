import React from "react";

const FormElement = ({ name, type, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {name.substring(0, 1).toUpperCase() + name.substring(1)}
      </label>
      <input
        className="form-control"
        type={type}
        id={name}
        name={name}
        placeholder={`Enter your ${name}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormElement;
