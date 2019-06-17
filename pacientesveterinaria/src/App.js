import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Nuevacita from "./components/Nuevacita";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Nuevacita />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
