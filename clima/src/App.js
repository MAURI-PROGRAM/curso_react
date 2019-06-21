import React, { useState } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Error from "./componentes/Error";

function App() {
  const [ciudad, guardarCiudad] = useState("");
  const [pais, guardarPais] = useState("");
  const [error, guardarError] = useState("");

  const datosConsulta = datos => {
    if (datos.ciudad === "" || datos.pais === "") {
      guardarError(true);
      return;
    }
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  };

  //cargar un componente COndicionalmente
  let componente;
  if (error) {
    //hay un error
    componente = <Error mensaje="Ambos campos son obligatorios" />;
  } else {
    componente = null;
  }
  return (
    <div>
      <Header titulo="React App Clima" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta} />
            </div>
            <div className="col s12 m6">{componente}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
