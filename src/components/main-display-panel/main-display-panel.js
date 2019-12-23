import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuItem from "../menu-item/menu-item";

export default class MainDisplayPanel extends Component {
  constructor() {
    super();

    this.state = {
      groups: [
        {
          title: "Barbells",
          imageUrl: "https://i.ibb.co/FWpkFbn/barbells.jpg",
          id: 1,
          url: "barbells"
        },
        {
          title: "Dumbbells",
          imageUrl: "https://i.ibb.co/sKGkyxB/dumbbells.jpg",
          id: 2,
          url: ""
        },
        {
          title: "Kettlebells",
          imageUrl: "https://i.ibb.co/j3Dz9Q8/kettlebells.jpg",
          id: 3,
          url: ""
        },
        {
          title: "Barbell plates",
          imageUrl: "https://i.ibb.co/B3J1P2W/barbell-plates.jpg",
          id: 4,
          url: ""
        },
        {
          title: "Exercise mats",
          imageUrl: "https://i.ibb.co/r6nSCPy/exercise-mats.jpg",
          id: 5,
          url: ""
        }
      ]
    };
  }
  render() {
    return (
      <Row className="mt-3 justify-content-center  align-items-center">
        {this.state.groups.map(({ id, ...groupProps }) => {
          return <MenuItem key={id} {...groupProps} />;
        })}
      </Row>
    );
  }
}
