import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {
  state = {
    noticias: [],
    categoria: "",
    pais: "",
    pagina: "1"
  };
  async componentDidMount() {
    const noticiasLs = localStorage.getItem("parnoticias");
    console.log(1);
    if (noticiasLs) {
      const { categoria, pais, pagina } = JSON.parse(noticiasLs);
      this.setState(
        {
          categoria,
          pais,
          pagina
        },
        () => this.consultarNoticias(categoria, pais, pagina)
      );
    } else {
      this.consultarNoticias();
    }
  }
  componentDidUpdate() {
    const parnoticia = {
      categoria: this.state.categoria,
      pais: this.state.pais,
      pagina: this.state.pagina
    };
    localStorage.setItem("parnoticias", JSON.stringify(parnoticia));
  }
  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina === 1) return null;
    pagina--;
    this.setState({ pagina }, () => {
      this.consultarNoticias(
        this.state.categoria,
        this.state.pais,
        this.state.pagina
      );
    });
  };
  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina++;
    this.setState({ pagina }, () => {
      this.consultarNoticias(
        this.state.categoria,
        this.state.pais,
        this.state.pagina
      );
    });
  };
  consultarNoticias = async (
    categoria = "general",
    pais = "mx",
    pagina = "1"
  ) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${pais}&pageSize=6&page=${pagina}&category=${categoria}&apiKey=b0f1150eb9f34da3a9b88de98b81f408`;
    console.log(url);
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    if (Object.keys(noticias.articles).length === 0) {
      pagina--;
      this.setState({
        noticias: noticias.articles,
        categoria,
        pais,
        pagina
      });
    } else {
      this.setState({
        noticias: noticias.articles,
        categoria,
        pais
      });
    }
  };

  render() {
    const hoy = new Date();
    const fecha =
      hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
    return (
      <Fragment>
        <Header titulo="Noticias React API  *TPT*" />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
            categoria={this.state.categoria}
            pais={this.state.pais}
          />
          <ListaNoticias
            noticias={this.state.noticias}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
        <div className="row">
          <p className="col s12 m8 offset-m2">
            Todos los derechos reservados Michael Merchán curso React&copy;{" "}
            {fecha}
          </p>
        </div>
      </Fragment>
    );
  }
}

export default App;
