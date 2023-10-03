import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Head from "../template/head";
import { Container, Row, Button, Card, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import SkillListForm from "./SkillListForm";

function Profile1(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  // const [cities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    // Fetch the list of countries from the Restcountries API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Extract the names of the countries
        const countryNames = data.map((country) => country.name.common);
        // Sort the country names alphabetically
        const sortedCountries = countryNames.sort();
        // Set the sorted list of countries in the state
        setCountries(sortedCountries);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity(""); // Clear the selected city when the country changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Container>
      <Head />
      <Container>
        <Row className="d-flex justify-content-center my-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-vector/photo-sharing-concept-illustration_114360-275.jpg?w=826&t=st=1695218462~exp=1695219062~hmac=0b0e9b99cf9e6ab3526843cb1353167347dcb6ef5752dd4c6c83700a66165937"
              style={{ width: "50%", margin: "0 25%" }}
            />
            <Card.Body>
              <Card.Title>Tell us about yourself</Card.Title>
              <Card.Text>
                <Form>
                  <br />
                  <Row>
                    <Col>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Row>
                  <br />

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control placeholder="+1 226 937 987" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Date of Birth</Form.Label>
                    <br />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Form.Group>

                  <Form.Label>Race</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Black</option>
                    <option value="1">White</option>
                    <option value="2">Asian</option>
                    <option value="3">Indigenous or Native Peoples</option>
                  </Form.Select>
<br/>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Country</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="country"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                    >
                      <option>Select country</option>
                      {countries.map((countryName, index) => (
                        <option key={index} value={countryName}>
                          {countryName}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>City</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      id="citySelect"
                      name="city"
                      value={selectedCity}
                      onChange={handleCityChange}
                    >
                      <option value="">Select a city</option>
                      {countries.map((cityName, index) => (
                        <option key={index} value={cityName}>
                          {cityName}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <SkillListForm />
                  </Form.Group>                  
                  <br />
                  <Form.Group controlId="formGridAddress1">
                    <p className="text-center lead">What are you here for?</p>
                    <Form.Check label="Jobs" name="radio" type="radio" id="1"/>
                    <Form.Check
                      inline
                      label="Community"
                      name="radio"
                      type="radio"
                      id="2"
                    />
                    <Form.Check label="Both" name="radio" type="radio" id="3"/>
                  </Form.Group>
                </Form>
              </Card.Text>

              <Row>
                <Col>
                  <Link to="/welcome">
                    <Button variant="dark" style={{ width: "100%" }}>Continue</Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Container>
  );
}

export default Profile1;
