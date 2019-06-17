import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Nuevacita from "./components/Nuevacita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
    citas: []
  };
  //cuando la aplicacion carga
  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }
  //cuando eliminamos o agragamos una nueva cita
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }
  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];
    //Agregar el nuevo state
    this.setState({
      citas
    });
    console.log(this.state.citas);
  };
  //eliminar citas del state
  eliminarCita = id => {
    //tomar una copia del state
    const citasActuales = [...this.state.citas];
    //utilizar filter para sacar el elemento @id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);
    //actualizar el state
    this.setState({
      citas
    });
  };

  render() {
    const hoy = new Date();
    const fecha =
      hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Nuevacita crearNuevaCita={this.crearNuevaCita} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
          <p className="col-md-10 mx-auto">
            <span>
              Todos los derechos reservados Michael Merchán curso React&copy;{" "}
              {fecha}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
