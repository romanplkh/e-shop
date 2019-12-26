import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotalItemsInCart
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";

export const CheckoutPage = ({ itemsInCart, total }) => {
  return (
    <Container>
      <h1 className="display-4">Checkout Page</h1>
      <Row>
        <Table responsive>
          <thead>
            <tr className="text-center">
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {itemsInCart.map(item => {
              return <CheckoutItem cartItem={item} key={item.id} />;
            })}
          </tbody>
        </Table>
        TOTAL: {total}
        {/* <Col md={3}>Product</Col>
        <Col md={3}>Description</Col>
        <Col md={3}>Quantity</Col>
        <Col md={2}>Price</Col>
        <Col md={1}>Remove</Col> */}
      </Row>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsInCart: selectCartItems,
  total: selectTotalItemsInCart
});

export default connect(mapStateToProps)(CheckoutPage);
