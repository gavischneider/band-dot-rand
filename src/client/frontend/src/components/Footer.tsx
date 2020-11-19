import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const year: Number = new Date().getFullYear();

  return (
    <div className="pt-20">
      <div className="flex items-center justify-center flex-wrap bg-purple-500 p-6 shadow-lg inset-x-0 top-0 object-top sticky z-10">
        {`© ${year}`}
        <a
          href="https://gavischneider.github.io/Personal-Site/"
          target="_blank"
          className="pl-1"
        >
          Gavi Schneider
        </a>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/gavi-schneider-27a87837/"
            target="_blank"
            className="linkedin social pl-1"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://twitter.com/gschnei"
            target="_blank"
            className="twitter social pl-1"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://github.com/gavischneider"
            target="_blank"
            className="github social pl-1"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};
