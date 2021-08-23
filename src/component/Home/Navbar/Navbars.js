import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">SHOP</Nav.Link>
          <Nav.Link href="#features">ACCESSORIES</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
