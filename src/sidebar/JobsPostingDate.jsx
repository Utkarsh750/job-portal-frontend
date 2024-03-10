import React from "react";
import InputFields from "../components/InputFields";

function JobsPostingDate({ handleChange }) {
  const now = new Date();

  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const twentyFourAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);
  console.log(twentyFourAgoDate);
  return (
    <div>
      <h4 className=" text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            value=""
            id="test"
            onChange={handleChange}
          />
          <span className="checkmark"></span>All time
        </label>

        <InputFields
          handleChange={handleChange}
          value={twentyFourAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 days"
          name="test"
        />
        <InputFields
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  );
}

export default JobsPostingDate;
