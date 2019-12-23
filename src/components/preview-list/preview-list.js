import React from "react";
import { PreviewItem } from "../preview-item/preview-item";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const PreviewList = ({ title, items }) => {
  return (
    <Container fluid style={{ padding: "2%" }}>
      <h1 className="display-4 mt-5 mb-2">{title}</h1>
      <Row className="justify-content-around">
        {items
          .filter((el, i) => i < 4)
          .map(({ id, ...item }) => {
            return (
              <Col xl={3} md={6} key={id} className="mt-md-3 mt-sm-4">
                <PreviewItem {...item} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default PreviewList;
