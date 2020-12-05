import React from "react";
import imagePath from "../assets/logo2.png";

export const Navbar = () => {
  function handleClick() {
    window.location.reload();
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-600 pl-6 pr-6 pt-3 pb-3 shadow-lg inset-x-0 top-0 object-top sticky z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={imagePath} alt="logo" className="w-24 h-18" />
      </div>
      <div className="flex">
        <div className="my-auto pr-1">
          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 hover:from-teal-400 hover:to-blue-500  h-10 px-5 m-2 transition-colors duration-120 rounded-lg focus:shadow-outline shadow-lg transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Next!
          </button>
        </div>
      </div>
    </nav>
  );
};
