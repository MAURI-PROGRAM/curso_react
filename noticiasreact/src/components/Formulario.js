import React, { Component } from "react";
import PropTypes from "prop-types";

class Formulario extends Component {
  state = {
    categoria: "general",
    pais: "mx"
  };

  cambiarCategoria = e => {
    this.setState(
      {
        categoria: e.target.value
      },
      () => {
        this.props.consultarNoticias(
          this.state.categoria,
          this.state.pais,
          this.palabra
        );
      }
    );
  };
  cambiarPais = e => {
    this.setState(
      {
        pais: e.target.value
      },
      () => {
        this.props.consultarNoticias(
          this.state.categoria,
          this.state.pais,
          this.palabra
        );
      }
    );
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form action="">
            <div className="row">
              <h7 className="col s12 m8 offset-m2 ">Categoria</h7>
            </div>
            <div className="row">
              <div className="col s12 m8 offset-m2 ">
                <select
                  onChange={this.cambiarCategoria}
                  value={this.props.categoria}
                >
                  <option value="general">General</option>
                  <option value="business">Negocios</option>
                  <option value="entertainment">Entretenimiento</option>
                  <option value="science">Ciencia</option>
                  <option value="sports">Deporte</option>
                  <option value="technology">Tecnologia</option>
                </select>
              </div>
            </div>
            <div className="row">
              <h7 className="col s12 m8 offset-m2 ">Pais</h7>
            </div>
            <div className="row">
              <div className="col s12 m8 offset-m2">
                <select onChange={this.cambiarPais} value={this.props.pais}>
                  <option value="mx">Mexico</option>
                  <option value="ar">Argentina</option>
                  <option value="co">Colombia</option>
                  <option value="ve">Venezuela</option>
                  <option value="br">Brazil</option>
                  <option value="us">Estados Unidos</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Formulario.propTypes = {
  consultarNoticias: PropTypes.func.isRequired
};
export default Formulario;
