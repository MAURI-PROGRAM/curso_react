import React, { Component } from "react";
import Axios from "axios";

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;
class CategoriasProvider extends Component {
  token = "E76LJF7FC2N227IXR6TG";
  state = {
    categorias: []
  };
  componentDidMount() {
    this.obtenerCategorias();
  }
  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es_ES`;
    let categorias = await Axios.get(url);
    this.setState({
      categorias: categorias.data.categories
    });
  };
  render() {
    return (
      <CategoriasContext.Provider value={{ categorias: this.state.categorias }}>
        {this.props.children}
      </CategoriasContext.Provider>
    );
  }
}

export default CategoriasProvider;
