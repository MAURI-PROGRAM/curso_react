import React from "react";

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0">{cita.mascota}</h3>
        <p className="card-text">
          <span>Nombre Dueño:</span>
          {cita.propietario}
        </p>
        <p className="card-text">
          <span>Nombre Fecha:</span>
          {cita.fecha}
        </p>
        <p className="card-text">
          <span>Nombre Hora:</span>
          {cita.hora}
        </p>
        <p className="card-text">
          <span>Nombre Sintomas:</span>
          {cita.sintomas}
        </p>
        <button
          className="btn btn-danger"
          onClick={() => eliminarCita(cita.id)}
        >
          Borrar &times;
        </button>
      </div>
    </div>
  );
};

export default Cita;
