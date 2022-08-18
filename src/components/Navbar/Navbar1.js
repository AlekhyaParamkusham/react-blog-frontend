import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Nabvar1.css";

const Navbar1 = ({ val }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className={val ? "navbar" : "others"}>
        <div className="navbar_logo">
          <Link to="/">
            <h5>
              <strong>Meal-O-Mania</strong>
            </h5>
          </Link>
        </div>
        {/* <ul className="navbar_list">
          <Link to="/" className="navbar_listItems">
            HOME
          </Link>
          <Link to="/about" className="navbar_listItems">
            ABOUT
          </Link>
          <Link to="/" className="navbar_listItems">
            RECIPES
          </Link>
          <Link to="/contact" className="navbar_listItems">
            CONTACT
          </Link>
        </ul> */}
        {/* <div className="navbar-smallscreen">
          <GiHamburgerMenu
            color="black"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="navbar-smallscreen_links">
                <li>
                  <Link to="/" onClick={() => setToggleMenu(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setToggleMenu(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => setToggleMenu(false)}>
                    Recipes
                  </Link>
                </li>

                <li>
                  <Link to="/contact" onClick={() => setToggleMenu(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div> */}
      </nav>
      <div className="custom-shape-divider-top-1647337641">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={val ? "shape-fill" : "shape-fill-dark"}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Navbar1;
