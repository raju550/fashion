import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import car from "../../../media/icon/car.png";
import man from "../../../media/icon/man.png";
import money from "../../../media/icon/money.png";
import "../Card/Card.css";
import "./Contact.css";
const Contact = () => {
  return (
    <Container className="header-top">
      <CardGroup>
        <Card>
          <Card.Body className="d-flex align-items-center">
            <div>
              <img className="image-style m-3" src={car} alt="" />
            </div>
            <div>
              <h6>FREESHIPING</h6>
              <h5>Every Day / Every Order</h5>
              <span>*All Order Over $100</span>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="d-flex align-items-center">
            <div>
              <img className="image-style m-3" src={man} alt="" />
            </div>
            <div>
              <h6>FREESHIPING</h6>
              <h5>Every Day / Every Order</h5>
              <span>*All Order Over $100</span>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className="d-flex align-items-center">
            <div>
              <img className="image-style m-3" src={money} alt="" />
            </div>
            <div>
              <h6>FREESHIPING</h6>
              <h5>Every Day / Every Order</h5>
              <span>*All Order Over $100</span>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Contact;
