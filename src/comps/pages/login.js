import React from "react";
import { Link } from "react-router-dom";
// import firebase from "./../../firebase";
import {
  Card,
  ListGroup,
  Row,
  Container,
  Col,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap";
import Head from "../template/head";

function Login(props) {
 

  return (
    <Container>
      <Head/>
      <Row className="d-flex justify-content-center">
        
        <Col md={4} className="my-4">
          <Card style={{marginTop: "10vh"}}>
            <Card.Img
              variant="top"
              src="https://app.obsidi.com/assets/logos/bptn/obsidi_logo_white.png"
              alt="Image by storyset on Freepik"
              style={{ backgroundColor: "black"}}
            />
            <Card.Body style={{borderColor:"white"}}>
              <Card.Title>Hey Welcome</Card.Title>
              <Card.Text>
                Pick up were you left off, update and maintain.<br/><br/>
              </Card.Text>
             
            <Row className="justify-content-center">
            <span className="text-center"> <p className="lead">Continue with</p></span> 
              <Col xs={2}>
                <img src="assets/google.png" alt="google"/>
              </Col>
              <Col xs={2}>
                <img src="assets/linkedin.png" alt="google"/>
              </Col>
              <Col xs={2}>
                <img src="assets/slack.png" alt="google"/>
              </Col>
              <Col xs={2}>
                <img src="assets/apple.png" alt="google"/>
              </Col>
              <span className="text-center"><br/> <p className="lead">or log in with email</p></span> 
            </Row>
            <ListGroup className="list-group-flush" >
              <form>
                <ListGroup.Item style={{border:"none"}}>
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
                    <br/>
                  <Button variant="outline-dark">
                    Not a member yet? Signup
                  </Button>
                  </Link>
                  </Row>
                </ListGroup.Item>
              </form>
            </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
