import React, { useState, useEffect } from "react";
import "./header.css";
import header from "./../../images/CoverPic.jpg";

export const Header = () => {
  // const [width, setWidth] = useState(0);
  // const [image, setImage] = useState(false);

  // useEffect(() => {
  //   const updateWidth = () => {
  //     const newWidth = window.innerWidth;
  //     setWidth(newWidth);
  //     console.log(width);
  //     setImage(!image);
  //     console.log(!image);
  //     if (width >= 690 && width <= 800) {
  //       setImage(true);
  //     } else {
  //       setImage(false);
  //     }
  //   };
  //   // console.log(image);
  //   window.addEventListener("resize", updateWidth);
  //   return () => window.removeEventListener("resize", updateWidth);
  // }, [width]);
  // console.log(image);
  return (
    <>
      {/* {image ? ( */}
      <div className="displayImg">
        <img className="headerImg " src={header} alt="Header Image" />
      </div>
      {/* ) : (
        <div></div>
      )} */}

      <div className="header">
        <h3>YOUR VIRTUAL HELP, MAKING MEALS SIMPLIFIED!</h3>
      </div>
    </>
  );
};
