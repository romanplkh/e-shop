import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MainDisplayPanel from "../../components/main-display-panel/main-display-panel";
import Slider from "../../components/slider/slider";

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Container
        fluid
        className="app app__main m-0 p-0"
        style={{
          height: "100%"
        }}
      >
        <MainDisplayPanel />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
