import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Head from "../template/head";
import { Link } from "react-router-dom";

function Welcome(props) {
  return (
    <Container fluid style={{ backgroundColor: "black", paddingBottom: "10%", width: "100%", height: "100vh", color:"white"}}>
      <Head />
      <Container fluid style={{background: "linear-gradient(to bottom, rgb(126,69,196), black)"}}>
        <Row>
          <Col style={{marginTop: "17.5vh"}}>
            {/* <img src="https://img.freepik.com/free-vector/hand-drawn-step-illustration_52683-106767.jpg?w=826&t=st=1695585369~exp=1695585969~hmac=ef4d6ba0dacc44e658976ea3a433c9f60e1c6d489aa74b07306bd99078db8221" style={{width: "20%", margin: "3% 40%"}} alt="clap" /> */}
            <h1 className="text-center display-4">
              Nice Work, John Doe! <br /> Your profile's ready.
            </h1>
            <p className="text-center lead" style={{ fontSize: "16px" }}>
              Congratulations! With thousands to choose from, its time to start
              searching <br /> on roles that are perfect fit for your skills and needs.
            </p>
            <ButtonGroup style={{margin: "0 42%", width:"30%"}}>
            <Link to="/feed"> <Button variant="outline-light">Explore Jobs</Button></Link>
                <Link to="/feed"> <Button variant="dark" className="mx-3">Complete Profile</Button></Link>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Welcome;
