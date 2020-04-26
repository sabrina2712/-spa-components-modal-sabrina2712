import React, { Component } from "react";
import Employees from "./employees.json";
import "./employee.css";

class ShowEmployee extends Component {
  getEmployee() {
    let m = Employees.map((employee) => {
      console.log(employee);
      return (
        <div className="employee">
          <div>
            <img src={employee.avatar} alt="Logo" />
          </div>
          <div>
            {employee.firstName} {employee.lastName}
          </div>
          <div>{employee.jobTitle}</div>
        </div>
      );
    });

    return m;
  }
  render() {
    return <div className="container-item">{this.getEmployee()}</div>;
  }
}

export default ShowEmployee;
