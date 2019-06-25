import React from "react";
import Pregunta from "./componente/Pregunta";

function App() {
  return (
    <div className="App container">
      <header>
        <h1> Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta />
        </div>
      </header>
    </div>
  );
}

export default App;
