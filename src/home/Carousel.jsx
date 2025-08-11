import "../styles/home/Carousel.css"
import { useState } from "react";
import {
    Outlet,
    Link
  } from "react-router-dom";
// import team from "./assets/team.jpeg"
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import arrowLeft from "../assets/arrow-left.svg"
import arrowRight from "../assets/arrow-right.svg"


const slides = [slide1, slide2, slide3]

export default function Carousel() {
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
      setImageIndex(index => {
        if (index === 0) {
          return slides.length -1;
        }
        return index - 1;
      })
    }

    function showNextImage() {
      setImageIndex(index => {
        if (index === slides.length -1) {
          return 0;
        }
        return index + 1;
      })
    }

    return (
      <>
          <div className="carousel-holder">
            <img className="carousel-image" src={slides[imageIndex]} alt=""></img>
            <button onClick={showPrevImage} className="carousel-button" style={{left: 0}}><img src={arrowLeft} alt="" /></button>
            <button onClick={showNextImage} className="carousel-button"  style={{right: 0}}><img src={arrowRight} alt="" /></button>
          </div>
      </>
    );
  }
