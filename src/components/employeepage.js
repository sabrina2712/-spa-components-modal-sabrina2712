import React, { Component } from "react";
import "./employee.css";
import ShowEmployee from "./employee";
import Modal from "./modal";

class EmployeePage extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="head">Meet The Team</div>
        <p className="text">
          our Team of <span className="num">{this.props.num}</span> srategies,
          designers,manager, developer make ciústome product for startup and
          leading companies.
        </p>
        <div className="page-item">
          <ShowEmployee />
        </div>
      </div>
    );
  }
}
export default EmployeePage;
