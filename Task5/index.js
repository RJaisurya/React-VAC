import React from "react";
import ReactDOM from "react-dom";

class Reactform extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      age: null,
      errmsg: "",
      selectedSport: "", // To keep track of the selected sport
      phoneNumber: "",
      address: "",
      references: 0,
      totalAmount: 0,
    };
  }

  handleSportChange = (event) => {
    const selectedSport = event.target.value;
    const sportCost = {
      Tennis: 500,
      Basketball: 600,
      Football: 700,
    };
    const totalAmount = sportCost[selectedSport] * this.state.references;
    this.setState({ selectedSport, totalAmount });
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let err = "";

    if (name === "age") {
      if (value !== "" && !Number(value)) {
        err = <strong>Invalid, age must be a number</strong>;
      }
    } else if (name === "phoneNumber") {
      if (!Number(value)) {
        err = <strong>Invalid phone number, please enter digits only</strong>;
      }
    } else if (name === "references") {
      if (!Number(value)) {
        err = <strong>Invalid number of references, please enter digits only</strong>;
      } else {
        const sportCost = {
          Tennis: 500,
          Basketball: 600,
          Football: 700,
        };
        const totalAmount = sportCost[this.state.selectedSport] * value;
        this.setState({ totalAmount });
      }
    } else if (name === "totalAmount") {
      if (!Number(value)) {
        err = <strong>Invalid amount, please enter digits only</strong>;
      }
    }

    this.setState({ errmsg: err, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form before submission
    const { username, age, phoneNumber, references, totalAmount, selectedSport } = this.state;
    if (!username || age === null || !phoneNumber || references <= 0 || totalAmount <= 0 || !selectedSport) {
      alert("Please fill in all the required fields and make sure the values are valid.");
    } else {
      // Submit the form or perform any other necessary actions here
      alert("Form submitted successfully!");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sports Registration Form</h1>
        <div>
          <label>
            Select one sport to register for:
            <select name="selectedSport" value={this.state.selectedSport} onChange={this.handleSportChange}>
              <option value="">Select Sport</option>
              <option value="Tennis">Tennis - Rs. 500</option>
              <option value="Basketball">Basketball - Rs. 600</option>
              <option value="Football">Football - Rs. 700</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Number of References:
            <input
              type="text"
              name="references"
              value={this.state.references}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Total Amount to be Paid: Rs. {this.state.totalAmount}
          </label>
        </div>
        {this.state.errmsg}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

ReactDOM.render(<Reactform />, document.getElementById("root"));
