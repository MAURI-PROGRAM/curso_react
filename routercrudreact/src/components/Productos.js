import React, { Fragment } from "react";
import Producto from "./Producto";

const Productos = ({ productos, setnuevoProducto }) => {
  return (
    <Fragment>
      <h1 className="text-center">Productos</h1>
      <ul className="list-group mt-5">
        {productos.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
            setnuevoProducto={setnuevoProducto}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default Productos;
