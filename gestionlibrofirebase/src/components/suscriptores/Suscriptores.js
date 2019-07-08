import React from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Suscriptores = ({ suscriptores, firestore, history }) => {
  if (!suscriptores) return <Spinner />;
  //elimianr suscriptores

  const eliminarSuscriptore = id => {
    firestore
      .delete({
        collection: "suscriptores",
        doc: id
      })
      .then(history.push("/suscriptores"));
  };
  return (
    <div className="row">
      <div className="col-md-12 mb-4">
        <Link to="/suscriptores/nuevo" className="btn btn-primary">
          {" "}
          <i className="fas fa-plus" />
          {""}Nuevo suscriptor
        </Link>
      </div>
      <div className="col-md-8">
        <h2>
          <i className="fas fa-users" />
          Suscriptores
        </h2>
      </div>
      <table className="table table-striped mt-4">
        <thead className="text-ligth bg-primary">
          <tr>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {suscriptores.map(suscriptor => (
            <tr key={suscriptor.id}>
              <td>
                {suscriptor.nombre} {suscriptor.apellido}
              </td>

              <td>{suscriptor.carrera}</td>
              <td>
                <Link
                  to={`/suscriptores/mostrar/${suscriptor.id}`}
                  className="btn btn-success btn-block"
                >
                  <i className="fas fa-angle-double-right" /> Mas informacion
                </Link>
                <button
                  className="btn btn-danger btn-block"
                  type="button"
                  onClick={() => eliminarSuscriptore(suscriptor.id)}
                >
                  <i className="fas fa-trash-alt" /> Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Suscriptores.propTypes = {
  firestore: PropTypes.object.isRequired,
  suscriptores: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "suscriptores" }]),
  connect((state, props) => ({
    suscriptores: state.firestore.ordered.suscriptores
  }))
)(Suscriptores);
