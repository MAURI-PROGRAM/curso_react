import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Nuevacita from "./components/Nuevacita";

class App extends Component {
  state = {
    citas: []
  };
  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];
    //Agregar el nuevo state
    this.setState({
      citas
    });
    console.log(this.state.citas);
  };
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Nuevacita crearNuevaCita={this.crearNuevaCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
