import React from "react";
import Header from "./components/Header";
import CategoriasProvider from "./context/CategoriasContext";
import EventosProvider from "./context/EventosContext";
import Formulario from "./components/Formulario";
import ListaEventos from "./components/ListaEventos";

function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header />
        <div className="uk-container">
          <Formulario />
          <ListaEventos />
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
