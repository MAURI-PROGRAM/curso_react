import React, { useState, useEffect, Fragment } from "react";
import Formulario from "./componentes/Formulario";
import Letra from "./componentes/Letra";
import Informacion from "./componentes/Informacion";
import axios from "axios";

function App() {
  const [artista, setartista] = useState("");
  const [letra, setletra] = useState([]);
  const [info, setinfo] = useState({});

  //metodo para consultar la api de letras de canciones
  const consultarapiletra = async busqueda => {
    const { artista, cancion } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    const resultado = await axios(url);
    setletra(resultado.data.lyrics);
    setartista(artista);
  };
  const consultarapiinfo = async () => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    const resultado = await axios(url);
    setinfo(resultado.data.artists[0]);
    console.log(info, 1);
  };
  useEffect(() => {
    consultarapiinfo();
  }, [artista]);
  return (
    <Fragment>
      <Formulario consultarapiletra={consultarapiletra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion info={info} />
          </div>
          <div className="col-md-6">
            <Letra letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
