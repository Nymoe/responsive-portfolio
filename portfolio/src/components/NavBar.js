import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';

function NavBar() {
    return (
        <>
        <Navbar id="header">
          <Container>
            <Navbar.Brand href="/responsive-portfolio/home">My Portfolio</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/responsive-portfolio/home">Home</Nav.Link>
              <Nav.Link href="/responsive-portfolio/skills">Skills</Nav.Link>
              <Nav.Link href="/responsive-portfolio/projects">Projects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}
export default NavBar;
