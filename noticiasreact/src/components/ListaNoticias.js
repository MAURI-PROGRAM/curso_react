import React from "react";
import Noticia from "./Noticia";
import PropTypes from "prop-types";
import Paginacion from "./Paginacion";

const ListaNoticias = ({ noticias, paginaAnterior, paginaSiguiente }) => {
  return (
    <div>
      <Paginacion
        paginaAnterior={paginaAnterior}
        paginaSiguiente={paginaSiguiente}
      />
      <div className="row">
        {noticias.map(noticia => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </div>
      <Paginacion
        paginaAnterior={paginaAnterior}
        paginaSiguiente={paginaSiguiente}
      />
    </div>
  );
};

ListaNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
};
export default ListaNoticias;
