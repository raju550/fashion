import React from 'react'
import { Button, Col, Container, Row, Card } from 'react-bootstrap'
import './Card.css'
import bg1 from '../../../media/slide1.jpg'
import bg2 from '../../../media/s2.jpg'
import bg3 from '../../../media/s3.jpg'

const Cards = () => {
    return (
        <Container className="header-top">
            <Row>
                <Col md="8"><Card style={{ width: '100%', height:"100%" }}>
                    <Card.Img className="overlay-image" variant="top" src={bg1} />
                    <Card.Body className="top-right">
                        <h3>Big Sale</h3>
                        <h1 className="text-big">Women's Summer Collection</h1>
                        <Button variant="danger">Shop Now</Button>
                    </Card.Body>
                </Card></Col>
             
                <Col md="4">
                <Row style={{height:"100%"}}>
                        <Row md="6" style={{marginBottom:'10px'}}><Card style={{ width: '100%' }}>
                            <Card.Img className="image-h1" variant="top" src={bg2} />
                        </Card></Row>
                        <Row md="6"><Card style={{ width: '100%'}}>
                            <Card.Img className="image-h1" variant="top" src={bg3} />
                        </Card></Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Cards


