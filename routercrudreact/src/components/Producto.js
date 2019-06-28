import React from "react";
import { Link } from "react-router-dom";

const Producto = ({ producto }) => {
  const eliminarProducto = id => {
    console.log("eliminando", id);
  };
  return (
    <li
      data-categoria={producto.categoria}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p>
        {producto.nombrePlatillo}{" "}
        <span className="font-weight-bold">{producto.precioPlatillo}</span>
      </p>
      <div>
        <Link
          to={`/productos/editar/${producto.id}`}
          className="btn btn-success mr-2"
        >
          Editar
        </Link>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => eliminarProducto(producto.id)}
        >
          Eliminar &times;
        </button>
      </div>
    </li>
  );
};

export default Producto;