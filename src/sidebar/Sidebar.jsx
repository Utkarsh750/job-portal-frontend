import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobsPostingDate from "./JobsPostingDate";
import WorkExperience from "./WorkExperience";
import ExperienceType from "./ExperienceType";

function Sidebar({ handleChange, handleClick }) {
  return (
    <div className=" space-y-5">
      <h3 className=" text-lg font-bold mb-2">Filter</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobsPostingDate handleChange={handleChange} />
      <WorkExperience handleChange={handleChange} />
      <ExperienceType handleChange={handleChange} />
    </div>
  );
}

export default Sidebar;
