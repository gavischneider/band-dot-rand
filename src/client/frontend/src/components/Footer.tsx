import React from "react";

export const Footer = () => {
  const year: Number = new Date().getFullYear();

  return (
    <div className="pt-20">
      <div className="flex items-center justify-center flex-wrap bg-purple-500 p-6 shadow-lg inset-x-0 top-0 object-top sticky z-10">
        {`© ${year}`}
        <a
          href="https://github.com/gavischneider"
          target="_blank"
          className="pl-2"
        >
          Gavi Schneider
        </a>
      </div>
    </div>
  );
};
