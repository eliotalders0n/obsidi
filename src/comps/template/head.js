import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Head() {
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
            <Nav.Link href="https://app.obsidi.com/home/jobs">Find Jobs</Nav.Link>
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
            <Link to="/login">
              <Button variant="dark" className="me-2">
                Signup
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline-dark">Login</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;
