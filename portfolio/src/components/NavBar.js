import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';

function NavBar() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" class="header">
          <Container>
            <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}
export default NavBar;
