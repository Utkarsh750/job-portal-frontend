import React from "react";
import InputFields from "../components/InputFields";

function ExperienceType({ handleChange }) {
  return (
    <div>
      <h4 className=" text-lg font-medium mb-2">Experience Type</h4>
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
          value="temporary"
          title="Temporary"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="full-time"
          title="Full-time"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value="part-time"
          title="Part-time"
          name="test"
        />
      </div>
    </div>
  );
}

export default ExperienceType;
