import React, { useState } from "react";
import { Container, Row, Col, Button, Alert, Nav, Card, ProgressBar } from "react-bootstrap";
import Header from "./header";
import Sidepane from "./sidepane";
import { Link } from "react-router-dom";

function Mypage(props) {
    const now = 60;
  return (
    <Container fluid style={{ backgroundColor: "rgb(240,240,240)" }}>
      <Header />
      <Nav
        className="justify-content-center"
        activeKey="/home"
        style={{ backgroundColor: "black" }}
      >
        <Nav.Item>
          <Nav.Link href="/home">
            <Button variant="dark">My Page</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Button variant="dark">My Posts</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Button variant="dark">My Settings</Button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>
        <Col md={2}>
          <Sidepane />
        </Col>
        <Col md={2} style={{ backgroundColor: "grey" }}></Col>
        <Col style={{ backgroundColor: "" }}>
            <div>
                <br/>
                <h1 className="display-5">My Page</h1>
                <br/>
            <Card body>
                <h2 className="display-6">John Doe</h2>
                <p className="lead">One more step until your profile is complete.</p>
                <p>Highlight your top skills to be discovered in employer searches.</p>
                <Row>
                    <Col>
                <Button variant="dark">Edit Skills</Button>
                </Col>
                <Col md={4}>
                <ProgressBar animated now={now} label={`${now}%`} />
                </Col>
                </Row>
            </Card>

            <Row>
                
            </Row>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Mypage;
