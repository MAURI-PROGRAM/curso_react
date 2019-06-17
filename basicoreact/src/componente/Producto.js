import React from "react";

const Producto = ({ producto }) => (
  <div>
    <h1>{producto.name}</h1>
    <p>{producto.precio}</p>
  </div>
);

export default Producto;
