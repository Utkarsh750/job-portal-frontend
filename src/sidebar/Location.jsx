import React from "react";
import InputFields from "../components/InputFields";

function Location({ handleChange }) {
  return (
    <div>
      <h4 className=" text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            value=""
            id="test"
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputFields
          handleChange={handleChange}
          value="banglore"
          title="Banglore"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="hyderabad"
          title="Hyderabad"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="pune"
          title="Pune"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="noida"
          title="Noida"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="mumbai"
          title="Mumbai"
          name="test"
        />
      </div>
    </div>
  );
}

export default Location;
