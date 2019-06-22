import React, { useState } from "react";

const Formulario = ({ datosConsulta }) => {
  //state del componente
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: ""
  });
  const handleChange = e => {
    //Cambiar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };
  const consultarClima = e => {
    e.preventDefault();

    datosConsulta(busqueda);
  };
  return (
    <form onSubmit={consultarClima}>
      <div className="input-field cil s12">
        <input type="text" name="ciudad" id="ciudad" onChange={handleChange} />
        <label htmlFor="ciudad">ciudad</label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="" onChange={handleChange}>
          <option value="">Selecciona un pais</option>
          <option value="EC">Ecuador</option>
          <option value="PE">Peru</option>
          <option value="CO">Colombia</option>
          <option value="MX">Mexico</option>
          <option value="US">Estados Unidos</option>
          <option value="AR">Argentina</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-efect waves-light btn-large btn-block yellow accent-4"
          value="Buscar Clima"
        />
      </div>
    </form>
  );
};

export default Formulario;
