import React from 'react'
import { Button, Col, Container, Row, Card } from 'react-bootstrap'
import './Card.css'

const Cards = () => {
    return (
        <Container>
            <Row>
                <Col md="7"><Card style={{ width: '100%', height:"100%" }}>
                    <Card.Img className="overlay-image" variant="top" src="https://images.pexels.com/photos/346751/pexels-photo-346751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body className="top-right">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
             
                <Col md="5">
                <Row style={{height:"100%"}}>
                        <Row md="6"><Card style={{ width: '100%'  }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body >
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Row>
                        <Row md="6"><Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Cards


