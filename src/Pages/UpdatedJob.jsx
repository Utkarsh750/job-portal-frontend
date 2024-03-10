import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreateTable from "react-select/creatable";
import { useLoaderData, useParams } from "react-router-dom";

function UpdatedJob() {
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedOptions, setSelectedOptions] = useState(null);
  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "ReactJs", label: "ReactJs" },
    { value: "Typescript", label: "Typescript" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "NodeJs", label: "NodeJs" },
    { value: "Tailwind", label: "Tailwind" },
  ];
  const onSubmit = (data) => {
    data.skills = selectedOptions;
    fetch(`https://job-portal-backend-cuds.onrender.com/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Updated Successfully");
        }
        reset();
      });
    console.log(id);
  };
  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className=" bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          {/* 1st row */}
          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$50k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                className="create-job-input"
                {...register("salaryType", { required: true })}
              >
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: Gurugaram"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2024-11-02"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>

            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                className="create-job-input"
                {...register("experienceLevel", { required: true })}
              >
                <option value={experienceLevel}>{experienceLevel} </option>
                <option value="NoExperience">Hourly</option>
                <option value="Intenrship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label className="block mb-2 text-lg">Required Skills Set: </label>
            <CreateTable
              className="create-job-input py-2"
              defaultValue={skills}
              onChange={setSelectedOptions}
              options={options}
              isMulti
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                defaultValue={companyLogo}
                placeholder="paste your company logo URL: https://github.com"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>

            <div className=" lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                className="create-job-input"
                {...register("employmentType", { required: true })}
              >
                <option value={employmentType}>{employmentType} </option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className=" w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-800"
              {...register("description")}
              defaultValue={description}
              placeholder="Job Description"
              rows={6}
            />
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              placeholder="your email"
              {...register("postedBy")}
              defaultValue={postedBy}
              className="create-job-input"
            />
          </div>
          <input
            type="submit"
            className="cursor-pointer block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdatedJob;
