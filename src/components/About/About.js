import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="aboutNavbar">
          <div className="aboutMenu">
            <div className="aboutBrand">
              <p className="brand">MEALS!</p>
            </div>
          </div>
          <div className="menu">
            <ul className="menuUl">
              <li className="menuItems">HOME</li>
              <li className="menuItems">ABOUT</li>
              <li className="menuItems">CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbarVector">
        <svg
          width="1400"
          height="196"
          viewBox="0 0 1400 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-20 103.014L28 127.364C76 151.713 172 200.413 268 195.678C364 190.267 460 132.098 556 92.8683C652 54.3145 748 34.6995 844 49.5799C940 63.7839 1036 112.483 1132 122.629C1228 132.098 1324 103.014 1372 88.1336L1420 73.9296V-14H1372C1324 -14 1228 -14 1132 -14C1036 -14 940 -14 844 -14C748 -14 652 -14 556 -14C460 -14 364 -14 268 -14C172 -14 76 -14 28 -14H-20V103.014Z"
            fill="#766360"
          />
        </svg>
      </div>
    </>
  );
};

export default About;
