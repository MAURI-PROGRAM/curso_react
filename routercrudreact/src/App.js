import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productos from "./components/Productos";
import EditarProducto from "./components/EditarProducto";
import AgregarProducto from "./components/AgregarProducto";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  const [productos, setproductos] = useState([]);
  useEffect(() => {
    const consultarApi = async () => {
      const resultado = await axios.get("http://localhost:4000/restaurant");
      setproductos(resultado.data);
    };
    consultarApi();
  }, []);
  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/nuevo-producto" component={AgregarProducto} />
          <Route exact path="/productos" component={Productos} />
          <Route
            exact
            path="/productos/editar/:id"
            component={EditarProducto}
          />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
