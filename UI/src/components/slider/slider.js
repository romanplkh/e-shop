import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";

const Slider = () => {
  return (
    <Carousel
      indicators={false}
      interval={3500}
      controls={false}
      pauseOnHover={false}
      touch={true}
      className="d-none d-sm-block"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/0svgvhB/slide-bb-2.jpg"
          alt="Third slide"
        />
        <div className="d-none d-md-block slide-title">
          <h1 className="display-3 display-sm-none">
            It all starts with attitude
          </h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/dmNrP0k/slide-bb-1.jpg"
          alt="Third slide"
        />

        <div className="d-none d-md-block slide-title">
          <h3 className="display-3">Make good habits </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://i.ibb.co/Nr4rJWH/slide-bb-3.jpg"
          alt="Third slide"
        />
        <div className="d-none d-md-block slide-title">
          <h3 className="display-3">Train hard, win easy</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
