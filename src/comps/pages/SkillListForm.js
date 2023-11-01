import React, { Component } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import Fuse from "fuse.js"; // Import the fuse.js library

class SkillsListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsFromFile: [], // Array to store skills from a file
      selectedSkill: "", // Selected skill
      selectedSkillsList: [], // List of selected skills
      searchResults: [],
    };

    this.fuse = new Fuse([], {
      keys: ["name"], // You can customize this based on your data structure
      threshold: 0.4, // Adjust the threshold for close matches
    });
  }

  componentDidMount() {
    // Fetch the skills.txt file
    fetch("/assets/skills_list.txt")
      .then((response) => response.text())
      .then((text) => {
        // Split the text content by lines to get an array of skills
        const skillsArray = text
          .split("\n")
          .filter((skill) => skill.trim() !== "");
        this.setState({ skillsFromFile: skillsArray });

        // Initialize the Fuse instance with the skills data
        this.fuse.setCollection(
          skillsArray.map((skill, index) => ({ id: index, name: skill }))
        );
      })
      .catch((error) => {
        console.error("Error fetching skills from file:", error);
      });
  }

  handleSkillChange = (event) => {
    const skillToAdd = event.target.value;
    this.setState({ selectedSkill: skillToAdd });

    if (skillToAdd) {
      // Add the selected skill to the list
      this.setState((prevState) => ({
        selectedSkillsList: [...prevState.selectedSkillsList, skillToAdd],
        selectedSkill: "", // Clear the selected skill from the dropdown
      }));
    }
  };

  handleInputChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({
      selectedSkill: searchTerm,
    });

    if (searchTerm) {
      // Perform a fuzzy search and update search results
      const results = this.fuse.search(searchTerm);
      this.setState({
        searchResults: results.map((result) => result.item.name),
      });
    } else {
      this.setState({ searchResults: [] }); // Clear search results when input is empty
    }
  };

  handleSelectSkill = (selectedSkill) => {
    // Add the selected skill to the list
    this.setState((prevState) => ({
      selectedSkillsList: [...prevState.selectedSkillsList, selectedSkill],
      selectedSkill: "", // Clear the selected skill from the input field
      searchResults: [], // Clear search results when a skill is selected
    }));
  };

  handleRemoveSkill = (indexToRemove) => {
    this.setState((prevState) => {
      // Create a new array without the skill to be removed
      const updatedSkillsList = prevState.selectedSkillsList.filter(
        (_, index) => index !== indexToRemove
      );
      return { selectedSkillsList: updatedSkillsList };
    });
  };

  render() {
    const { searchResults, selectedSkill, selectedSkillsList } = this.state;

    return (
      <div>
        <Form.Label>Skills</Form.Label>
        <Form.Control
          type="text"
          value={selectedSkill}
          onChange={this.handleInputChange} // Handle input changes
          placeholder="Type to search for a skill"
        />

        {/* Render the search results */}
        {searchResults.length > 0 && (
          <div>

            <ListGroup>
              {searchResults.map((skill, index) => (
                <ListGroup.Item action onClick={() => this.handleSelectSkill(skill)} key={index}>{skill}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            padding: "1em 1em .75em",
            borderRadius: "4px",
          }}
        >
          {selectedSkillsList.map((skill, index) => (
            // <ListGroup.Item key={index}>{skill}</ListGroup.Item>
            <Button size="sm" variant="dark" key={index} className="mx-1 my-1">
              {skill}{" "}
              <i
                className="delete"
                onClick={() => this.handleRemoveSkill(index)}
              >
                &times;
              </i>
            </Button>
          ))}
        </div>
      </div>
    );
  }
}

export default SkillsListForm;
