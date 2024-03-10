import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [seletedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    // fetch("jobs.json")
    fetch("https://job-portal-backend-cuds.onrender.com/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setJobs(data.jobs);
      });
    setIsLoading(false);
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filterdItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // radio based filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // button based filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // calculate index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // function for next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filterdItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function for previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // filtering input items
    if (query) {
      filteredJobs = filterdItems;
    }

    // category fitering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    //slice the data based oncurrent range
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, seletedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* {eft side} */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* {job cards} */}
        <div className=" col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className=" font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className=" text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found!</p>
            </>
          )}

          {result.length > 0 ? (
            <div className=" flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Prev
              </button>
              <span className=" mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filterdItems.length / itemsPerPage)}{" "}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filterdItems.length / itemsPerPage)
                }
                className=" hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* {right side} */}
        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
