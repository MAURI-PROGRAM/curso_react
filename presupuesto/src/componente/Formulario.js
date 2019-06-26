import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = props => {
  const { setgasto, setcrearGasto } = props;

  const [nombreGasto, guardarNombreGasto] = useState("");
  const [cantidadGasto, guardarCantidadGasto] = useState("");
  const [error, guardarError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();
    if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === "") {
      guardarError(true);
      return;
    } else {
      guardarError(false);
      const gasto = {
        id: shortid.generate(),
        nombreGasto,
        cantidadGasto
      };
      setgasto(gasto);
      setcrearGasto(true);
      guardarCantidadGasto("");
      guardarNombreGasto("");
    }
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        Nombre Gasto
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={e => guardarNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>
      <div className="campo">
        cantidad Gasto
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadGasto}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
