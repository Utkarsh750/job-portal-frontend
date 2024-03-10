import React from "react";
import InputFields from "../components/InputFields";

function WorkExperience({ handleChange }) {
  return (
    <div>
      <h4 className=" text-lg font-medium mb-2">Work Experience</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            value=""
            id="test"
            onChange={handleChange}
          />
        </label>

        <InputFields
          handleChange={handleChange}
          value="Any experience"
          title="Any experience"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="test"
        />
      </div>
    </div>
  );
}

export default WorkExperience;
