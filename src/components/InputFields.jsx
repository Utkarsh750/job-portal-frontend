import React from "react";

const InputFields = ({ handleChange, title, value, name }) => {
  return (
    <div>
      <label className="sidebar-label-container">
        <input type="radio" name={name} value={value} onChange={handleChange} />
        <span className="checkmark"></span>
        {title}
      </label>
    </div>
  );
};

export default InputFields;
