import React from "react";

const Gasto = ({ gasto, eliminarGasto }) => {
  const gastoDelete = e => {
    e.preventDefault();
    eliminarGasto(gasto);
  };
  return (
    <li className="gastos">
      <div className="row">
        <p>
          {gasto.nombreGasto}
          <span className="gasto">${gasto.cantidadGasto}</span>
          <button
            type="button"
            className="button alert-danger"
            onClick={gastoDelete}
          >
            Eliminar
          </button>
        </p>
      </div>
    </li>
  );
};

export default Gasto;
