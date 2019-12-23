import React from "react";
import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";
import MainDisplayPanel from "../../components/main-display-panel/main-display-panel";

export const HomePage = () => {
  return (
    <Container className="w-100">
      <MainDisplayPanel />
    </Container>
  );
};
