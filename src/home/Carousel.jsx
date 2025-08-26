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
          <section 
            className="carousel-holder"
            aria-label="Image Slider"
          >
            <a href="#after-image-slider-controls" className="skip-link">
              Skip Image Slider Controls
            </a>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                overflow: "hidden",
              }}
            >
              {slides.map((url, index) => (
                <img 
                  key={url}
                  src={url}
                  className="carousel-image"
                  aria-hidden={imageIndex !== index}
                  style={{ translate: `${-100 * imageIndex}%` }}
                />
              ))}
            </div>
            <button 
              onClick={showPrevImage} 
              className="carousel-button" 
              style={{left: 0}}
              aria-label="View Previous Image"
            >
              <img src={arrowLeft} alt="" aria-hidden/>
            </button>
            <button onClick={showNextImage} 
              className="carousel-button"  
              style={{right: 0}}
              aria-label="View Next Image"
            >
              <img src={arrowRight} alt="" aria-hidden/>
            </button>
            <div
              style={{
                position: "absolute",
                bottom: ".5rem",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: ".25rem",
              }}
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={index === imageIndex ? "image-dot active" : "image-dot"}
                  aria-label={`View Image ${index + 1}`}
                  onClick={() => setImageIndex(index)}
                >
                </button>
              ))}
            </div>
            <div id="after-image-slider-controls" />
          </section>
      </>
    );
  }
