import React from "react";
import { useState } from "react";
import {
  Alert,
  Row,
  Col,
  InputGroup,
  Form,
  Stack,
  Badge,
  Container,
  Button,
  ListGroup,
} from "react-bootstrap";
import Head from "../template/head";
import { Link } from "react-router-dom";

function Landing(props) {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <Alert
        show={show}
        style={{ backgroundColor: "white", border: "none", color: "white" }}
      >
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => setShow(false)}
            variant="outline-dark"
            style={{ marginBottom: "-30px" }}
          >
            X
          </Button>
        </div>
        {/* <h1 class="display-4"><b>BFUTR2023</b> Get Your <b>VIP</b> Ticket Now</h1> */}
        <img
          src="assets/bfutr.png"
          style={{ width: "70%", marginLeft: "15%" }}
          alt="bfutr"
        />
        <Link to="https://obsidi.com/bfutr/">
          <Button style={{ marginLeft: "-200px" }}>Get Your Pass Now</Button>
        </Link>
      </Alert>
      <Head />
      <Container style={{ backgroundColor: "#d6d6d6", paddingBottom: "10%" }}>
        <Row>
          <Col
            style={{ marginLeft: "30%", marginTop: "10%", alignSelf: "center" }}
          >
            <h1>Find the Job you want</h1> <br />
            <p>Any industry. Any location. Any experience level.</p>
          </Col>
        </Row>
        <Row style={{ width: "60%", marginLeft: "20%" }}>
          <InputGroup className="mb-3">
            <Form.Control type="text" placeholder="Keywords" />
            <Form.Control type="text" placeholder="Location" />
            <Form.Select aria-label="Default select example">
              <option>Distance</option>
              <option value="1">5 Miles</option>
              <option value="2">10 Miles</option>
              <option value="3">30 Miles</option>
            </Form.Select>
            <Link to="https://app.obsidi.com/home/jobs">
              <Button variant="success">Search</Button>
            </Link>
          </InputGroup>
          <Stack direction="horizontal" gap={2} style={{ marginLeft: "10%" }}>
            Trending Searches :<Badge bg="success">Nursing</Badge>
            <Badge bg="success">Cyber Security</Badge>
            <Badge bg="success">Accountant</Badge>
            <Badge bg="success">Coder</Badge>
          </Stack>
        </Row>
      </Container>

      <Container>
        <Row className="my-3">
          <Col>
            <img
              style={{ width: "20vh" }}
              src="https://thelogofinder.com/wp-content/uploads/edd/2022/05/Intact_Financial-Logo..svg"
              alt="fasken"
            />
          </Col>
          <Col>
            <img
              style={{ width: "20vh", marginTop: "5vh" }}
              src="assets/download (1).png"
              alt="Sunlife"
            />
          </Col>
          <Col>
            <img
              style={{ width: "20vh", marginTop: "1vh" }}
              src="assets/download.png"
              alt="TD"
            />
          </Col>
          <Col>
            <img
              style={{ width: "20vh" }}
              src="assets/download.jpeg"
              alt="Benchsci"
            />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col>
            {" "}
            <img
              src="https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-3806.jpg?w=826&t=st=1695211621~exp=1695212221~hmac=a3b3470ffa9dd487733f0d4fac389d1e74073c864daad55ce40b6bdf8a6aa76f"
              style={{ width: "100%" }}
              alt="obsidi"
            />
          </Col>
          <Col>
            {" "}
            <h1>Up your work game, it’s easy</h1>
            <br />
            <ListGroup as="ul" variant="flush">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Join your way</div>
                  Register and browse professionals, explore projects, or even
                  book a consultation.
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Post a job and hire top talent</div>
                  Finding talent doesn’t have to be a chore. Post a job or we
                  can search for you!
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Work with the best—For-Free</div>
                  OBSIDI makes it affordable to up your work and take advantage
                  of low transaction rates.
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Find great opportunities</div>
                  Engage with a community of candidates who are not only skilled
                  but also bring diverse perspectives to the workplace.
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">We are all about the Tribe</div>
                  By leveraging features that reduce bias, employers can ensure
                  that their hiring processes are fair and equitable.
                </div>
              </ListGroup.Item>
            </ListGroup>
            <br />
            <Link to="/login">
              <Button variant="dark">Become A Member</Button>
            </Link>
            <Link to="https://app.obsidi.com/home/jobs">
              <Button variant="outline-dark" className="mx-2">
                Become a Partner
              </Button>
            </Link>{" "}
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div style={{backgroundColor: "", margin: "20vh 0"}}>
            <h1>Get the App</h1> 
            <p>By leveraging features that reduce bias, ensure that hiring processes are fair and equitable.</p>
            <Button variant="outline-dark"><img src="assets/appleblack.png" alt="appleblack"/> Apple Store</Button>
            <Button variant="dark" className="mx-3"><img src="assets/google.png" alt="google"/> Play Store</Button>
            </div>
          </Col>
          <Col className="my-5">
            <img
              src="assets/qrcode.png"
              alt="qrcode"
              style={{
                padding: "150px 20px",
                border: "6px solid",
                borderRadius: "50px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
