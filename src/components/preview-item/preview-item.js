import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export const PreviewItem = ({ id, name, price, imageUrl }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{ maxWidth: "70%", height: "250px", margin: "0 auto" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Row className="justify-content-between px-3">
          <h3 className="text-secondary font-weight-bold">CAD: {price} $</h3>
          <Button variant="warning">Go somewhere</Button>
        </Row>
      </Card.Body>
    </Card>
  );
};
