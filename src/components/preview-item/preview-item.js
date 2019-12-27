import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";

const PreviewItem = ({ item, addItemToCart }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{
          maxWidth: "70%",
          height: "250px",
          with: "250px",
          margin: "0 auto"
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Row className="justify-content-between px-3">
          <h3 className="text-secondary font-weight-bold">CAD$: {price} </h3>
          <CustomButton variant="warning" onClick={() => addItemToCart(item)}>
            Add to Cart
          </CustomButton>
        </Row>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addToCart(item))
  };
};

export default connect(null, mapDispatchToProps)(PreviewItem);
