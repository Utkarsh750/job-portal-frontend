import { FiMapPin, FiSearch } from "react-icons/fi";
function Banner({ query, handleInputChange }) {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-blue">new job</span> Today
      </h1>
      <p className="text-lg mb-2 text-black/80">
        Thousands of jobs in the S/W Development , Full-Stack Development ,
        Dev-Ops are waiting for you
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              placeholder="what position are you looking for ?"
              className="block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-500 focus:right-6 sm:text-sm sm:leading-6 pl-8"
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-500 focus:right-6 sm:text-sm sm:leading-6 pl-8"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          <button
            type="submit"
            className="py-2 px-8 bg-blue text-white md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
