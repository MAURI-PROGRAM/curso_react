import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Producto = ({ producto, setnuevoProducto }) => {
  const eliminarProducto = id => {
    console.log("eliminando", id);

    Swal.fire({
      title: "Estas seguro?",
      text: "Un platillo eliminado no se puede eliminar",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async result => {
      if (result.value) {
        try {
          const url = `http://localhost:4000/restaurant/${id}`;
          const resultado = await axios.delete(url);
          setnuevoProducto(true);
          if (resultado.status === 200) {
            Swal.fire("Eliminado!", "Tu platillo ha sido eliminado", "success");
          }
        } catch (error) {
          Swal.fire({
            type: "error",
            title: "Error",
            text: "Hubo un error, vuelve a intentarlo"
          });
        }
      }
    });
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
