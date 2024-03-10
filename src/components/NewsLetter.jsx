import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
import ResumeUpload from "./ResumeUpload";

function NewsLetter() {
  return (
    <div>
      <div>
        <h3 className=" text-lg font-bold mb-2 gap-2 flex items-center cursor-pointer">
          <FaEnvelopeOpenText />
          email me for jobs
        </h3>
        <p className=" text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          aliquid!
        </p>

        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            id="email"
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/* 2nd part */}
      <div className=" mt-20">
        <h3 className=" text-lg font-bold mb-2 gap-2 flex items-center cursor-pointer">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className=" text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          aliquid!
        </p>

        <ResumeUpload />
      </div>
    </div>
  );
}

export default NewsLetter;
