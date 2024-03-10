import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItem = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "post-job", title: "Post a Job" },
  ];
  return (
    <header className="container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-7">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <span className=" font-semibold text-black">Job Portal</span>
        </a>

        {/* navbars for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItem.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sign & login */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/signup" className="rounded border py-2 px-5">
            Login
          </Link>
          <Link
            to="/login"
            className="py-2 px-5 bg-blue border rounded text-white"
          >
            Signup
          </Link>
        </div>

        {/* for mobile */}
        <div>
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* nav for mobile */}
      <div
        className={`px-4 py-5 bg-black rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItem.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}

          <li>
            <Link to="/login" className="text-white py-1">
              Login
            </Link>
            <Link to="/signup" className="text-white px-9">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
