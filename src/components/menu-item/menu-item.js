import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { withRouter } from "react-router-dom";
import "./menu-item.css";

const MenuItem = ({ title, imageUrl, history, url, match }) => {
  console.log(url);
  console.log(match);
  return (
    <div className="col-xl-6 col-lg-10 col-12">
      <Card
        className="bg-dark text-white m-4 card-menue"
        onClick={() => history.push(`${match.url}${url}`)}
      >
        <Card.Img
          src={imageUrl}
          alt="Equipment"
          style={{ filter: "brightness(47%)", height: "370px" }}
        />
        <Card.ImgOverlay className="d-flex flex-column">
          <Card.Title>
            <h1>{title}</h1>
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>

          <Button
            variant="outline-warning"
            className="align-self-end mt-auto btn-lg"
          >
            More
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default withRouter(MenuItem);
