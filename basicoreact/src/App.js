import React, { Fragment } from "react";
import Header from "./componente/Header";
import Footer from "./componente/Footer";
import Productos from "./componente/ListaProductos";
function App() {
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="tienda virtual" />
      <Footer fecha={fecha} />
      <Productos />
    </Fragment>
  );
}

export default App;
