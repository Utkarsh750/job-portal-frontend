import React from "react";

function Button({ onClickHandler, value, title }) {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className=" px-4 py-1 text-base border hover:bg-blue hover:text-white"
    >
      {title}
    </button>
  );
}

export default Button;
