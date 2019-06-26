import React, { Fragment } from "react";

const Letra = ({ letra }) => {
  return (
    <Fragment>
      {letra.length === 0 ? null : <h2>Letra Canción</h2>}
      <p>{letra}</p>
    </Fragment>
  );
};

export default Letra;
