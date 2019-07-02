import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Suscriptores from "./components/suscriptores/Suscriptores";
import EditarSuscriptores from "./components/suscriptores/EditarSuscriptores";
import MostrarSuscriptores from "./components/suscriptores/MostrarSuscriptores";
import NuevoSuscriptores from "./components/suscriptores/NuevoSuscriptores";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          patch="/suscriptores/nuevo"
          component={NuevoSuscriptores}
        />
        <Route
          exact
          patch="/suscriptores/mostrar/:id"
          component={MostrarSuscriptores}
        />

        <Route
          exact
          patch="/suscriptores/editar/:id"
          component={EditarSuscriptores}
        />
        <Route exact patch="/suscriptores" component={Suscriptores} />
      </Switch>
    </Router>
  );
}

export default App;
