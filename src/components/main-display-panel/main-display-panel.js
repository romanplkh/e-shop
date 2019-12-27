import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuItem from "../menu-item/menu-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDisplayPanelGroup } from "../../redux/main-display-panel/main-display-panel.selectors";

const mainDisplayPanel = ({ groups }) => {
  return (
    <Row className=" justify-content-around">
      {groups.map(({ id, ...groupProps }) => {
        return (
          <Col key={id} md={6} xs={12} xl={4}>
            <MenuItem key={id} {...groupProps} />
          </Col>
        );
      })}
    </Row>
  );
};

const mapStateToPorps = createStructuredSelector({
  groups: selectDisplayPanelGroup
});

export default connect(mapStateToPorps)(mainDisplayPanel);
