import React, { useState, useRef } from "react";
import Error from "./Error";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditarProducto = ({ producto, history, setnuevoProducto }) => {
  const precioPlatillloRef = useRef("");
  const nombrePlatilloRef = useRef("");

  const [error, seterror] = useState(false);
  const [categoria, setcategoria] = useState("");
  const editarProducto = async e => {
    e.preventDefault();

    const nuevoValorPlatillo = precioPlatillloRef.current.value,
      nuevoNombrePlatillo = nombrePlatilloRef.current.value;
    if (nuevoNombrePlatillo === "" || nuevoValorPlatillo === "") {
      seterror(true);
      return;
    } else {
      seterror(false);
    }

    let categoriPlatillo = categoria === "" ? producto.categoria : categoria;
    const editarPlatillo = {
      nombrePlatillo: nuevoNombrePlatillo,
      precioPlatillo: nuevoValorPlatillo,
      categoria: categoriPlatillo
    };
    console.log(editarPlatillo);
    //enviar el request
    const url = `http://localhost:4000/restaurant/${producto.id}`;
    try {
      const resultado = await axios.put(url, editarPlatillo);
      if (resultado.status === 200) {
        Swal.fire(
          "Producto Editado",
          "El producto se editó correctamente",
          "success"
        );
        setnuevoProducto(true);
        history.push("/productos");
      }
    } catch (error) {
      Swal.fire({
        type: "error",
        title: "Error",
        text: "Hubo un error, vuelve a intentarlo"
      });
    }
  };
  const leerValorCategoria = e => {
    setcategoria(e.target.value);
  };
  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Editar Producto</h1>
      {error ? <Error mensaje="todos los campos son obligatorios" /> : null}
      <form className="mt-5" onSubmit={editarProducto}>
        <div className="form-group">
          <label>Nombre Platillo</label>

          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre Platillo"
            ref={nombrePlatilloRef}
            defaultValue={producto.nombrePlatillo}
          />
        </div>

        <div className="form-group">
          <label>Precio Platillo</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            placeholder="Precio Platillo"
            ref={precioPlatillloRef}
            defaultValue={producto.precioPlatillo}
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
              defaultChecked={producto.categoria === "postre"}
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
              defaultChecked={producto.categoria === "bebida"}
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
              defaultChecked={producto.categoria === "cortes"}
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
              defaultChecked={producto.categoria === "ensalada"}
            />
            <label className="form-check-label">Ensalada</label>
          </div>
        </div>
        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Editar Producto"
        />
      </form>
    </div>
  );
};

export default withRouter(EditarProducto);
