import React from "react";
import {
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/agungazhari/"
        target="_blank"
        rel="noreferrer noopener"
        className="uk-icon-button uk-margin-small-right"
        // style={{color:'#fff', background:'blue'}}
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://dribbble.com/agungazhari"
        target="_blank"
        rel="noreferrer noopener"
        className="uk-icon-button  uk-margin-small-right"
      >
        <FaDribbble />
      </a>
      <a
        href="https://www.instagram.com/agungazhari_/"
        target="_blank"
        rel="noreferrer noopener"
        className="uk-icon-button  uk-margin-small-right"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.behance.net/agungazhari"
        target="_blank"
        rel="noreferrer noopener"
        className="uk-icon-button"
      >
        <FaBehance />
      </a>
    </div>
  );
};

export default SocialMedia;
