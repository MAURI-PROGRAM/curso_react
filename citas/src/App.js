import React, { useState, Fragment, useEffect } from "react";

const Cita = ({ cita, index, eliminarCita }) => {
  return (
    <div className="cita">
      <p>
        Mascota:<span>{cita.mascota}</span>
      </p>
      <p>
        Dueño:<span>{cita.propietario}</span>
      </p>
      <p>
        Fecha:<span>{cita.fecha}</span>
      </p>
      <p>
        Hora:<span>{cita.hora}</span>
      </p>
      <p>
        Sintomas:<span>{cita.sintomas}</span>
      </p>
      <button
        onClick={() => eliminarCita(index)}
        type="button"
        className="button eliminar u-full-width"
      >
        Eliminar
      </button>
    </div>
  );
};

const Formulario = ({ crearCita }) => {
  const stateInicial = {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  };
  const [cita, guardarcita] = useState(stateInicial);
  const handleChange = e => {
    guardarcita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    //pasar la cita hacia el componente principal
    crearCita(cita);
    //reiniciar el state en el estado inicial
    guardarcita(stateInicial);
  };
  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={cita.mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={handleChange}
          value={cita.propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={handleChange}
          value={cita.fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={handleChange}
          value={cita.hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={cita.sintomas}
        />

        <button type="submit" className="button-primary u-full-width">
          Agregar
        </button>
      </form>
    </Fragment>
  );
};

const App = () => {
  //cargar las sitas de localstorage como state inicial
  let citasIniciales = JSON.parse(localStorage.getItem("citas_hook"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, guardarcitas] = useState(citasIniciales);
  //Agregar citas al state
  const crearCita = cita => {
    //tomar una copia del state y agregar el nuevo cliente
    const nuevasCitas = [...citas, cita];
    guardarcitas(nuevasCitas);
  };
  //elimina las Citas del State
  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    guardarcitas(nuevasCitas);
  };
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas_hook"));
    if (citasIniciales) {
      localStorage.setItem("citas_hook", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas_hook", JSON.stringify([]));
    }
  }, [citas]);

  //cargar Condicionalmente un Titulo
  const titulo =
    Object.keys(citas).length === 0 ? "No hay citas" : "Administrar las citas";
  const hoy = new Date();
  const fecha =
    hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
            <div className="row">
              <p className="col s12 m8 offset-m2">
                Todos los derechos reservados Michael Merchán curso React&copy;{" "}
                {fecha}
              </p>
            </div>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index) => (
              <Cita
                Key={index}
                index={index}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
