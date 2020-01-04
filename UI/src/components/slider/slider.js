import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";

const Slider = () => {
  const slideContainer = {
    height: "auto",
    maxHeight: "600px"
  };

  return (
    <Carousel indicators={false} className="d-none d-sm-block">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/0svgvhB/slide-bb-2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="d-none d-md-block text-center mb-5">
          <h1 className="display-3">First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/dmNrP0k/slide-bb-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={slideContainer}>
        <img
          className="d-block w-100 slide"
          src="https://i.ibb.co/Nr4rJWH/slide-bb-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
