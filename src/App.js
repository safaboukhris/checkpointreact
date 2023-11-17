
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Card, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (  
    <div className="App">
        {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Fly with us</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#section1">Home</Nav.Link>
            <Nav.Link href="#section2">Description</Nav.Link>
            <Nav.Link href="#section3">Activities</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="my-5">
        {/* Heading */}
        <h1 className="text-center">Explore your amazing city with us</h1>

 {/* Cards */}
  <Row className="mt-5">
          <Col md={4}>
            {/* Cards 1 */}
            <Card>
              <Card.Img variant="top" src="./greece.jpg"
              style={{ width: '100%', height: '340px' }} />
              <Card.Body>
                <Card.Title>Greece</Card.Title>
                <Card.Text>
                Greece, located in southeastern Europe, is a country renowned for its rich history, ancient civilization, stunning islands.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            {/* Card 2 */}
            <Card>
            <Card.Img variant="top" src="./zanzibar.webp"  
            style={{ width: '100%', height: '340px' }}/>
              <Card.Body>
                <Card.Title>Zanzibar</Card.Title>
                <Card.Text>
                Zanzibar is an archipelago off the coast of Tanzania known for its stunning white sandy beaches .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            {/* Card 3 */}
            <Card>
            <Card.Img variant="top" src="./turquie2.jpg" 
            style={{ width: '100%', height: '340px' }} />
              <Card.Body>
                <Card.Title>Turquie</Card.Title>
                <Card.Text>
                Antalya, located on the Mediterranean coast of Turkey, is a stunning resort city known for its breathtaking beaches.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        
    </div>

  );
}

export default App;
