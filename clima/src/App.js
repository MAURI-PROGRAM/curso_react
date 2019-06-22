import React, { useState, useEffect } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Error from "./componentes/Error";
import Clima from "./componentes/Clima";

function App() {
  const [ciudad, guardarCiudad] = useState("");
  const [pais, guardarPais] = useState("");
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    if (ciudad === "") return;
    const consultarAPI = async () => {
      const appId = "35d09161ab1289519ea7c726a73825cf";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      //consultar la URL
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarResultado(resultado);
    };
    consultarAPI();
  }, [ciudad, pais]);
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
  } else if (resultado.cod === "404") {
    componente = <Error mensaje="La ciudad no existe en este pais" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }
  const hoy = new Date();
  const fecha =
    hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
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
      <div className="row">
        <p className="col s12 m8 offset-m2">
          Todos los derechos reservados Michael Merchán curso React&copy;{" "}
          {fecha}
        </p>
      </div>
    </div>
  );
}

export default App;
