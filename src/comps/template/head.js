import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  Card,
  Modal,
  Form,
  Container,
  Button,
  ListGroup,
  ButtonGroup,
  ToggleButton
} from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Head() {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Login', value: '1' },
    { name: 'Signup', value: '2' },
  ];
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  const handleCloseReg = () => setShowRegister(false);
  const handleShowReg = () => setShowRegister(true);

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-dark">
      <Container >
        <Navbar.Brand href="/" style={{color:"white"}}>OBSIDI</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px"}}
            navbarScroll
          >
            <Nav.Link href="https://app.obsidi.com/home/jobs" style={{color:"white" }}>
              Find Jobs
            </Nav.Link>
            <Nav.Link href="https://obsidi.com/recruit/" style={{color:"white" }}>Post Jobs</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button style={{color:"white", backgroundColor: "rgb(126,69,196)", border: "none" }} onClick={handleShow}>
              Login
            </Button>
            <Button style={{color:"rgb(126,69,196)", borderColor: "rgb(126,69,196)", backgroundColor: "black", border: "1px solid" }} className="mx-3" onClick={handleShow}>
              Signup
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>

      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Body style={{ border: "none", backgroundColor: "rgb(26,26,26)"}}>
          <Card style={{ border: "none", backgroundColor: "rgb(26,26,26)", color:"white" }}>
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
             <ButtonGroup  style={{ width: "80%", marginLeft: "10%", marginBottom: "5%"}}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"         
            variant={idx % 2 ? 'outline-light' : 'outline-light'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      
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
                  <ListGroup.Item style={{ border: "none", backgroundColor: "rgb(26,26,26)", color:"white"}}>
                    <InputGroup size="sm" className="mb-3" style={{backgroundColor: "rgb(26,26,26)", color:"white"}}>
                      <InputGroup.Text id="inputGroup-sizing-sm" style={{backgroundColor: "rgb(26,26,26)", color:"rgb(150,150,150)",border:"none"}}>
                        Email
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="email"
                        aria-describedby="inputGroup-sizing-sm"
                        type="email"
                        style={{backgroundColor: "black", color:"white", border:"none"}}
                      />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                      <InputGroup.Text id="inputGroup-sizing-sm" style={{backgroundColor: "rgb(26,26,26)", color:"rgb(150,150,150)", border:"none"}}>
                        Password
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="password"
                        aria-describedby="inputGroup-sizing-sm"
                        type="password"
                        style={{backgroundColor: "black", color:"white", border:"none"}}
                      />
                    </InputGroup>
                    <Row>
                      <Col>
                        <Link to="/profile1">
                          <Button variant="dark" style={{ width: "100%", color:"white", backgroundColor: "rgb(126,69,196)", border: "none" }}>
                            Login
                          </Button>
                        </Link>
                      </Col>
                      <Link to="/profile1">
                        <br />
                        <Button variant="outline-dark" onClick={handleShowReg} style={{color: "white"}}>
                          Forgot Password?
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
