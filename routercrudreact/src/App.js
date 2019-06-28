import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productos from "./components/Productos";
import EditarProducto from "./components/EditarProducto";
import AgregarProducto from "./components/AgregarProducto";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  const [productos, setproductos] = useState([]);
  const [nuevoProducto, setnuevoProducto] = useState(true);
  useEffect(() => {
    if (nuevoProducto) {
      const consultarApi = async () => {
        const resultado = await axios.get("http://localhost:4000/restaurant");
        setproductos(resultado.data);
      };
      consultarApi();
      setnuevoProducto(false);
    }
  }, [nuevoProducto]);
  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route
            exact
            path="/nuevo-producto"
            render={() => (
              <AgregarProducto setnuevoProducto={setnuevoProducto} />
            )}
          />
          <Route
            exact
            path="/productos"
            render={() => (
              <Productos
                productos={productos}
                setnuevoProducto={setnuevoProducto}
              />
            )}
          />
          <Route
            exact
            path="/productos/editar/:id"
            render={props => {
              const idProducto = parseInt(props.match.params.id);
              const producto = productos.filter(
                producto => producto.id === idProducto
              );
              return (
                <EditarProducto
                  producto={producto[0]}
                  setnuevoProducto={setnuevoProducto}
                />
              );
            }}
          />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
