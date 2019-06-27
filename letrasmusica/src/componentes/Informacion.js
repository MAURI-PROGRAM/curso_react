import React from "react";
const Informacion = ({ info }) => {
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-werght-bold">
        Información Artista
      </div>
      <div className="card-body">
        <img src={info.strArtistThumb} alt="Logo Artista" />
        <p className="card-text">Genero:{info.strGenre}</p>
        <h2 className="card-text text-center">Biografía</h2>
        <p className="card-text">{info.strBiographyES}</p>
        <p className="card-text">
          <a
            href={`https://${info.strFacebook}`}
            target="_blank"
            rel="noopenernoreferrer"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            href={`https://${info.strTwitter}`}
            target="_blank"
            rel="noopenernoreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href={`${info.strLastFMChart}`}
            target="_blank"
            rel="noopenernoreferrer"
          >
            <i className="fab fa-lastfm" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Informacion;
