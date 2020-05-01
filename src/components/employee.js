import React, { Component } from "react";
import Employees from "./employees.json";
import "./employee.css";

class ShowEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { isModal: false, index: -1 };
  }

  getEmployee() {
    let employees = Employees.map((employee, i) => {
      return (
        <div
          className="employee"
          onClick={() => {
            this.setState(() => {
              return { isModal: true, index: i };
            });
          }}
        >
          <div>
            <img src={employee.avatar} alt="Logo" />
          </div>
          <div className="emp-name">
            {employee.firstName} {employee.lastName}
          </div>
          <div className="job-title">{employee.jobTitle}</div>
        </div>
      );
    });
    return employees;
  }

  onClose = () => {
    this.setState(() => {
      return { isModal: false };
    });
  };

  onNext = () => {
    if (this.state.index === Employees.length - 1) {
      return;
    }
    this.setState((state) => {
      return { index: state.index + 1 };
    });
  };

  onPrev = () => {
    if (this.state.index === 0) {
      return;
    }
    this.setState((state) => {
      return { index: state.index - 1 };
    });
  };
  employeeModal = () => {
    let employee = Employees[this.state.index];

    return (
      <div className="modal" id="modal">
        <div className="modal__content">
          <button onClick={this.onClose} className="modal-close">
            x
          </button>
          <header className="modal-heading">
            <div>
              {employee.firstName} {employee.lastName}
            </div>
          </header>
          <div>
            <img src={employee.avatar} alt="Logo" />
          </div>

          <div>{employee.jobTitle}</div>
          <div className="bio-employee">{employee.bio}</div>
          <div className="contact-employee">
            <div className="cont-item">Phone: {employee.contact.phone}</div>
            <div className="cont-item">email: {employee.contact.email}</div>
            <div className="cont-item">Website: {employee.contact.url}</div>
          </div>
          <footer>
            <button
              disabled={this.state.index === 0}
              className="prev-button"
              onClick={this.onPrev}
            >
              Prev
            </button>
            <button
              disabled={this.state.index === Employees.length - 1}
              className="next-button"
              onClick={this.onNext}
            >
              Next
            </button>
          </footer>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="container-item">{this.getEmployee()}</div>
        {this.state.isModal === true ? this.employeeModal() : null}
      </div>
    );
  }
}

export default ShowEmployee;
