import React from "react";

function PageHeader({ title, path }) {
  return (
    <div className=" mt-3 py-24 bg-[#FAFAFA] rounded flex items-center justify-center">
      <div>
        <h2 className=" text-blue text-3xl font-medium mb-1 text-center">
          {title}
        </h2>
        <p className=" text-center text-sm">
          <a href="/">Home</a> / {path}
        </p>
      </div>
    </div>
  );
}

export default PageHeader;
