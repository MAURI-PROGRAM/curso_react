import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import Navbarthis from "./components/layout/Navbarthis";

import Suscriptores from "./components/suscriptores/Suscriptores";
import EditarSuscriptores from "./components/suscriptores/EditarSuscriptores";
import MostrarSuscriptores from "./components/suscriptores/MostrarSuscriptores";
import NuevoSuscriptores from "./components/suscriptores/NuevoSuscriptores";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbarthis />
        <div className="container">
          <Switch>
            <Route exact path="/suscriptores" component={Suscriptores} />
            <Route
              exact
              path="/suscriptores/mostrar/:id"
              component={MostrarSuscriptores}
            />
            <Route
              exact
              path="/suscriptores/nuevo"
              component={NuevoSuscriptores}
            />

            <Route
              exact
              path="/suscriptores/editar/:id"
              component={EditarSuscriptores}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
