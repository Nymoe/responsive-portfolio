import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container id="footer">
          <Row>
            <Col className="brand">
              <Navbar.Brand href="/home">Belal Bounasri</Navbar.Brand>
            </Col>
          </Row>
          <Row>
            <Col className="copyright">
              <span className="text-muted">© {new Date().getFullYear()} All Rights Reserved.</span>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
}