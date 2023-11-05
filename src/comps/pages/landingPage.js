import React from "react";
import { useState } from "react";
import {
  Alert,
  Row,
  Col,
  InputGroup,
  Form,
  Container,
  Button,
  ListGroup,
} from "react-bootstrap";
import Head from "../template/head";
import { Link } from "react-router-dom";

function Landing(props) {

  const [show, setShow] = useState(false);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container fluid style={{ backgroundColor: "black" }}>
        <Alert
          show={show}
          style={{ backgroundColor: "black", border: "none", color: "white" }}
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
          <h1 class="display-4"><b>BFUTR2023</b> Get Your <b>VIP</b> Ticket Now</h1>
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

        <Container fluid style={{ background: "linear-gradient(to bottom, rgb(126,69,196), black)", paddingBottom: "10%", width: "100%" }}>
          <Container >
            <Row>
              <Col
                style={{ marginLeft: "30%", color: "white", marginTop: "5%", alignSelf: "center" }}
              >
                <h1>Discover Your Dream Job</h1> <br />
              </Col>
            </Row>
            <Row style={{ width: "60%", marginLeft: "20%" }}>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm" style={{ backgroundColor: "black", border: "none" }}><i class="bi bi-search" style={{ color: "rgb(126,69,196)" }}></i></InputGroup.Text>
                  <Form.Control style={{ backgroundColor: "black", border: "none", color: "rgb(126,69,196)" }} size="lg" type="text" value="Seeking" />
                  <InputGroup.Text id="inputGroup-sizing-sm" style={{ backgroundColor: "black", border: "none" }}><i class="bi bi-geo-alt-fill" style={{ color: "rgb(126,69,196)" }}></i></InputGroup.Text>
                  <Form.Control style={{ backgroundColor: "black", border: "none", color: "white" }} size="lg" type="text" value="Location" />
                  <InputGroup.Text id="inputGroup-sizing-sm" style={{ backgroundColor: "black", border: "none" }}><i class="bi bi-code" style={{ color: "rgb(126,69,196)" }}></i></InputGroup.Text>
                  <Form.Control style={{ backgroundColor: "black", border: "none", color: "white" }} size="lg" type="text" value="Job Type" />
                  <Button size="lg" style={{ color: "white", backgroundColor: "rgb(126,69,196)", border: "none" }}>
                    <Link to="https://app.obsidi.com/home/jobs">
                      <i class="bi bi-search" style={{ color: "white" }}></i>
                    </Link>
                  </Button>

                </InputGroup>
              </Form>
              {/* <Stack direction="horizontal" gap={2} style={{ marginLeft: "10%" }}>
            Trending Searches :<Badge bg="success">Nursing</Badge>
            <Badge bg="success">Cyber Security</Badge>
            <Badge bg="success">Accountant</Badge>
            <Badge bg="success">Coder</Badge>
          </Stack> */}
              <p className="my-3 lead" style={{ color: "rgb(200,200,200)", marginLeft: "25%" }}>Unlock Opportunities That Inspire You.</p>
            </Row>
          </Container>
        </Container>

        <Container>
          <Row className="my-3" style={{ width: "70%", marginLeft: "25%"}}>
            
            <Col md={2}>
              <img
                style={{ width: "100%", height: "4vh" }}
                src="assets/sunlife.jpeg"
                alt="TD"
              />
            </Col>
            <Col md={2}>
              <img
                style={{ width: "100%", height: "4vh" }}
                src="assets/telus.jpeg"
                alt="Benchsci"
              />
            </Col>
            <Col md={2}>
              <img
                style={{ width: "100%", height: "4vh" }}
                src="assets/sunlife.jpeg"
                alt="TD"
              />
            </Col>
            <Col md={2}>
              <img
                style={{ width: "100%", height: "4vh" }}
                src="assets/telus.jpeg"
                alt="Benchsci"
              />
            </Col>
            <Col md={1}>
              <img
                style={{ width: "100%", height: "4vh" }}
                src="assets/TD.jpeg"
                alt="fasken"
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
                src="assets/blackBG.jpg"
                style={{ width: "60%", borderRadius: "250px", marginLeft: "20%" }}
                alt="obsidi"
              />
            </Col>
            <Col>
              {" "}
              <h1 style={{ color: "white" }}>Shape Your Career Journey on Your Terms</h1>
              <br />
              <ListGroup as="ul" variant="flush">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start my-3"
                  style={{ backgroundColor: "black", color: "white", height: "10px", border: "none" }}
                >
                  <div className="ms-2 me-auto">
                    <p className="lead">Receive instant job recommendations tailored to your skills and goals</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start my-3"
                  style={{ backgroundColor: "black", color: "white", height: "10px", border: "none" }}
                >
                  <div className="ms-2 me-auto">
                    <p className="lead">Explore opportunities across diverse company types and job structures: Remote, hybrid and on-site</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start my-5"
                  style={{ backgroundColor: "black", color: "white" }}>
                  <div className="ms-2 me-auto">
                    <p className="lead">Find Your Tribe, Connect with New Opportunities</p>
                  </div>
                </ListGroup.Item>

              </ListGroup>
              <br />
              <Link to="/login">
                <Button variant="dark" style={{ backgroundColor: "rgb(126,69,196)", marginLeft: "22px" }}>Become A Member</Button>
              </Link>
              {/* <Link to="https://app.obsidi.com/home/jobs">
                <Button variant="outline-dark" className="mx-2">
                  Become a Partner
                </Button>
              </Link>{" "} */}
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
              <h1 style={{ color: "white" }}>Discover and hire Top Talent</h1>
              <br />
              <ListGroup as="ul" variant="flush">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start my-5"
                  style={{ backgroundColor: "black", color: "white", height: "10px", border: "none" }}
                >
                  <div className="ms-2 me-auto">
                    <p className="lead">Start building trust and meaningful connections with Black professionals.
                      Don’t wait until you need to hire.</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start my-3"
                  style={{ backgroundColor: "black", color: "white", height: "10px", border: "none" }}
                >
                  <div className="ms-2 me-auto">
                    <p className="lead">Lower Your Hiring Costs and Tackle Diversity Hiring Challenges with a
                      Budget-Friendly Approach Tailored to Your Needs.
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start my-5"
                  style={{ backgroundColor: "black", color: "white" }}>
                  <div className="ms-2 me-auto">
                    <p className="lead">Invest in new community hubs to tap into a pool of top performing
                      Black candidates to fill your recruitment pipeline.</p>
                  </div>
                </ListGroup.Item>

              </ListGroup>
              <br />
              <Link to="/login">
                <Button variant="dark" style={{ backgroundColor: "rgb(126,69,196)", marginLeft: "22px" }}>Become A Partner</Button>
              </Link>
              {/* <Link to="https://app.obsidi.com/home/jobs">
                <Button variant="outline-dark" className="mx-2">
                  Become a Partner
                </Button>
              </Link>{" "} */}
            </Col>
            <Col>
              {" "}
              <img
                src="assets/bgwhite.jpg"
                style={{ width: "60%", borderRadius: "250px", marginLeft: "20%" }}
                alt="obsidi"
              />
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ backgroundColor: "rgb(26,26,26)", height: "50vh" }}>
          <Container>
            <Row style={{ backgroundColor: "rgb(26,26,26)", height: "50vh" }}>
              <Col>
                <div style={{ color: "white", margin: "20vh 0" }}>
                  <h1>Get the App</h1>
                  <p>Your Career, One Tap Away</p>
                  <Button variant="dark"><img src="assets/appleblack.png" alt="appleblack" /> Apple Store</Button>
                  <Button variant="dark" className="mx-3"><img src="assets/google.png" alt="google" /> Play Store</Button>
                </div>
              </Col>
              <Col>
                <img
                  src="assets/obsidiApp.png"
                  alt="qrcode"
                  style={{
                    padding: "0px 75px",
                    width: "70vh",
                    height: "50vh"
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className="text-align-center my-5">
          {/* <span style={{fontSize: "280px"}}>"</span> */}
          <p className="lead" style={{color:"white",  fontSize: "16px", margin: "200px 0", textAlign: "center"}}>Obsidi has been a game-changer in my career journey! The personalized job<br/> recommendations and seamless application process have made job hunting a breeze.<br/> Thanks to Obsidi, I found my dream job, and I couldn't be happier!
<br/><br/>
            - Thomas Edison</p>
            {/* <span style={{fontSize: "280px"}}>"</span> */}
            <br/>
        </Container>

        <Container className="text-align-center" fluid style={{ backgroundColor: "rgb(26,26,26)" }}>
          <Row>
            <Col><h3 className="display-6" style={{color: "white", margin: "5vh 10vh"}}><b>OBSIDI</b></h3></Col>
            <Col className="my-5">
                  <ul style={{color: "white", listStyleType: "none"}}>
                    <li><p className="lead"><b>Products</b></p></li>
                    <li>Obsidi</li>
                    <li>Obsidi Academy</li>
                    <li>Obsidi Recruit</li>
                    <li>Obsidi Community</li>
                  </ul>
                  </Col>

                  <Col className="my-5">
                  <ul style={{color: "white", listStyleType: "none"}}>
                    <li><p className="lead"><b>Company</b></p></li>
                    <li>About us</li>
                    <li>Work at BPTN</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                  </ul>
                  </Col>

                  <Col className="my-5">
                  <img src="assets/socials.png" alt="socails" style={{width: "35vh", marginTop: "10%"}}/>
                  </Col>

                  </Row>
                  <p style={{textAlign: "center", color: "white", paddingBottom: "50px"}}>2022 All rights reserved to Obsidi™ and BPTN</p>
        </Container>
        
      </Container>
    </div>
  );
}

export default Landing;
