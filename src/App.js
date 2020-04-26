import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/modal";
import EmployeePage from "./components/employeepage";

function App() {
  return (
    <div className="App">
      {/* <Modal title="customized Modal window title goes here " /> */}
      <EmployeePage num="42" />
    </div>
  );
}

export default App;
