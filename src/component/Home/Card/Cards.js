import React from "react";
import { Button, Col, Container, Row, Card, Carousel } from "react-bootstrap";
import "./Card.css";
import bg1 from "../../../media/slide1.jpg";
import bg2 from "../../../media/s2.jpg";
import bg3 from "../../../media/s3.jpg";

const Cards = () => {
  return (
    <Container className="header-top">
      <Row>
        <Col md="8" className="item-margin">
          <Carousel variant="dark">
            <Carousel.Item>
              <Card style={{ width: "100%", height: "100%" }}>
                <Card.Img className="overlay-image" variant="top" src={bg1} />
                <Card.Body className="top-right">
                  <h3>Big Sale</h3>
                  <h2 className="text-big">Women's Summer Collection</h2>
                  <Button variant="danger">Shop Now</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: "100%", height: "100%" }}>
                <Card.Img className="overlay-image" variant="top" src={bg1} />
                <Card.Body className="top-right">
                  <h3>Big Sale</h3>
                  <h2 className="text-big">Women's Summer Collection</h2>
                  <Button variant="danger">Shop Now</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: "100%", height: "100%" }}>
                <Card.Img className="overlay-image" variant="top" src={bg1} />
                <Card.Body className="top-right">
                  <h3>Big Sale</h3>
                  <h2 className="text-big">Women's Summer Collection</h2>
                  <Button variant="danger">Shop Now</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col md="4">
          <Card style={{ width: "100%" }}>
            <Card.Img className="image-h1" variant="top" src={bg2} />
          </Card>
          <br />
          <Card style={{ width: "100%" }}>
            <Card.Img className="image-h1" variant="top" src={bg3} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
