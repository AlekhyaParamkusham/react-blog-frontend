import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Header } from "../Header/Header";
import Navbar1 from "./../Navbar/Navbar1";

const carouselData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Italian",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1606491956391-70868b5d0f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Indian",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Mexican",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "French",
  },
  {
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a710e122971885.5631b3f0c1e48.jpg",
    title: "Turkish",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1491960693564-421771d727d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZWVzZWJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "American",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFtZW4lMjBub29kbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Korean",
  },
];
export const Home = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <>
      <Navbar1 val={true} />
      <Header />
      <div className="app__gallery flex__center">
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {carouselData.map((image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image.imageUrl} alt="gallery_image" />
                <div className="imageOverlaytext">
                  <Link
                    to={`${image.title.toLowerCase()}`}
                    className="overlayTitle"
                  >
                    {image.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
