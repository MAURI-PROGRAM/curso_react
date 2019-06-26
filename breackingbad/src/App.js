import React, { useState, useEffect } from "react";
import axios from "axios";

function Frase({ frase }) {
  return (
    <div className="frase">
      <h3>{frase.quote}</h3>
      <p>{frase.author}</p>
    </div>
  );
}

function App() {
  const [frase, setfrase] = useState({});
  // const [nuevafrase, setnuevafrase] = useState(false);
  //consulta API
  const consultarAPI = async () => {
    const resultado = await axios(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    //agregar el resultado de la API al state
    setfrase(resultado.data[0]);
  };
  useEffect(() => {
    consultarAPI();
  }, []);
  const hoy = new Date();
  const fecha =
    hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
  return (
    <div className="contenedor">
      <Frase frase={frase} />
      <button onClick={consultarAPI}>Generar Nueva</button>
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
