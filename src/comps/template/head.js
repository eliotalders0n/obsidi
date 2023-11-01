import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  Row,
  Col,
  InputGroup,
  Card,
  Form,
  Container,
  Button,
  ListGroup,
} from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Head() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  const handleCloseReg = () => setShowRegister(false);
  const handleShowReg = () => setShowRegister(true);

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">OBSIDI</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="https://app.obsidi.com/home/jobs">
              Find Jobs
            </Nav.Link>
            <Nav.Link href="https://obsidi.com/recruit/">Post Jobs</Nav.Link>
            {/* <NavDropdown title="Communities" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://obsidi.com/communities/">Members</NavDropdown.Item>
              <NavDropdown.Item href="https://obsidi.com/communities/">
                Obsidi Recruit
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://obsidi.com/recruit/">Partners</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://obsidi.com/cultivate/">Mentorship</Nav.Link>
            <Nav.Link href="https://obsidi.com/frequently-asked-question/">Resources</Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Jobs | Location"
              className="me-3"
              aria-label="Search"
            />
            {/* <Button variant="outline-success" className="me-5">Search</Button> */}
            {/* <Link to="/login"> */}
            <Button variant="dark" className="me-2" onClick={handleShow}>
              Signup
            </Button>
            {/* </Link> */}
            {/* <Link to="/login"> */}
            <Button variant="outline-dark" onClick={handleShow}>
              Login
            </Button>
            {/* </Link> */}
          </Form>
        </Navbar.Collapse>
      </Container>

      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Body>
          <Card style={{ border: "none" }}>
            <Card.Img
              variant="top"
              src="https://app.obsidi.com/assets/logos/bptn/obsidi_logo_white.png"
              alt="Image by storyset on Freepik"
              style={{ backgroundColor: "black" }}
            />
            <Card.Body style={{ borderColor: "white" }}>
              <Card.Title>Hey Welcome</Card.Title>
              <Card.Text>
                Pick up were you left off, update and maintain.
                <br />
                <br />
              </Card.Text>

              <Row className="justify-content-center">
                <span className="text-center">
                  {" "}
                  <p className="lead">Continue with</p>
                </span>
                <Col xs={2}>
                  <img src="assets/google.png" alt="google" />
                </Col>
                <Col xs={2}>
                  <img src="assets/linkedin.png" alt="google" />
                </Col>
                <Col xs={2}>
                  <img src="assets/slack.png" alt="google" />
                </Col>
                <Col xs={2}>
                  <img src="assets/apple.png" alt="google" />
                </Col>
                <span className="text-center">
                  <br /> <p className="lead">or log in with email</p>
                </span>
              </Row>
              <ListGroup className="list-group-flush">
                <form>
                  <ListGroup.Item style={{ border: "none" }}>
                    <InputGroup size="sm" className="mb-3">
                      <InputGroup.Text id="inputGroup-sizing-sm">
                        Email
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="email"
                        aria-describedby="inputGroup-sizing-sm"
                        type="email"
                      />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                      <InputGroup.Text id="inputGroup-sizing-sm">
                        Password
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="password"
                        aria-describedby="inputGroup-sizing-sm"
                        type="password"
                      />
                    </InputGroup>
                    <Row>
                      <Col>
                        <Link to="/profile1">
                          <Button variant="dark" style={{ width: "100%" }}>
                            Login
                          </Button>
                        </Link>
                      </Col>
                      <Link to="/profile1">
                        <br />
                        <Button variant="outline-dark" onClick={handleShowReg}>
                          Not a member yet? Signup
                        </Button>
                      </Link>
                    </Row>
                  </ListGroup.Item>
                </form>
              </ListGroup>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default Head;
