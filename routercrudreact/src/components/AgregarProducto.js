import React, { useState } from "react";
import Error from "./Error";
import axios from "axios";

const AgregarProducto = () => {
  const [nombrePlatillo, setnombrePlatillo] = useState("");
  const [precioPlatillo, setprecioPlatillo] = useState("");
  const [categoria, setcategoria] = useState("");
  const [error, seterror] = useState(false);
  const leerValorCategoria = e => {
    setcategoria(e.target.value);
  };
  const agregarProducto = async e => {
    e.preventDefault();
    if (nombrePlatillo === "" || precioPlatillo === "" || categoria === "") {
      seterror(true);
      return;
    } else {
      seterror(false);
      try {
        const resultado = await axios.post("http://localhost:4000/restaurant", {
          nombrePlatillo,
          precioPlatillo,
          categoria
        });
        console.log(resultado);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Agregar Nuevo Producto</h1>
      {error ? <Error mensaje="todos los campos son obligatorios" /> : null}
      <form className="mt-5" onSubmit={agregarProducto}>
        <div className="form-group">
          <label>Nombre Platillo</label>

          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre Platillo"
            onChange={e => setnombrePlatillo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Precio Platillo</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            placeholder="Precio Platillo"
            onChange={e => setprecioPlatillo(e.target.value)}
          />
        </div>

        <legend className="text-center">Categoría:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="postre"
              onChange={leerValorCategoria}
            />
            <label className="form-check-label">Postre</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="bebida"
              onChange={leerValorCategoria}
            />
            <label className="form-check-label">Bebida</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="cortes"
              onChange={leerValorCategoria}
            />
            <label className="form-check-label">Cortes</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="ensalada"
              onChange={leerValorCategoria}
            />
            <label className="form-check-label">Ensalada</label>
          </div>
        </div>
        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Agregar Producto"
        />
      </form>
    </div>
  );
};

export default AgregarProducto;
