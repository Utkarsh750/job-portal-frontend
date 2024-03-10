import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader";
import { FaMapPin } from "react-icons/fa6";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch(`https://job-portal-backend-cuds.onrender.com/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };
  return (
    <div className=" container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <PageHeader title={"Signle Job Page"} path={"Single job"} />

      <h1 className="text-4xl italic text-blue font-extrabold">Job Details</h1>
      <h2 className=" text-lg font-bold mb-2 gap-2 flex items-center cursor-pointer">
        <FaMapPin />
        {job.jobTitle} - <span className=" font-light">{job.jobLocation}</span>
      </h2>
      <p>{job.description}</p>
      <button
        className="bg-blue px-5 mt-3 py-2 text-white"
        onClick={handleApply}
      >
        Apply Now
      </button>
    </div>
  );
}

export default JobDetails;
