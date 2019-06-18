import React, { Component, Fragment } from "react";
import { async } from "q";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";

class App extends Component {
  state = {
    noticias: []
  };
  async componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=b0f1150eb9f34da3a9b88de98b81f408`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React API" />
        <div className="container white contenedor-noticias">
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
