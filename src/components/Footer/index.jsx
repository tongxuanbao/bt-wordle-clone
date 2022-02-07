import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <hr />
      <p>
        Checkout:{" "}
        <a href="https://github.com/tongxuanbao">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </p>
    </div>
  );
};

export default Footer;
