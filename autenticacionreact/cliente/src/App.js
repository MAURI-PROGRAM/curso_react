// import React, { Component } from 'react';
// import Router from './componentes/Router';

// class App extends Component {
//   render() {
//     return (
//         <React.Fragment>
//           <Router />
//         </React.Fragment>
//     )
//   }
// }

import React from "react";
import NavBar from "./componentes/Navbar";

// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./componentes/Profile";
import PrivateRoute from "./componentes/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;