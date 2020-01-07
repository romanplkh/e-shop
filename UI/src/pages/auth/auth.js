import React from "react";
import Login from "../../components/login/login";
import Register from "../../components/register/register";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Auth = () => {
  return (
    <Container className="p-3">
      <Row className="justify-content-around mt-5">
        <Col md={6}>
          <Login />
        </Col>
        <Col md={6} className="mb-4">
          <Register />
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
