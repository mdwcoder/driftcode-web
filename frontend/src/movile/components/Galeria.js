import React, { useState } from 'react';
import '../../pages/videos.css';
import './adaptadorGaleria.css'

const galeriaContext = require.context('../../materiales/coches_fotos/', false, /\.(txt|jpeg|png|gif)$/);
const galeriaImagenes = galeriaContext.keys().map((galeriaImagen) => galeriaContext(galeriaImagen));

const Nlimite = 10;

export const Galeria = () => {
  const [index, setIndex] = useState(0);

  const handleLeftArrowClick = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(Nlimite);
    }
  };

  const handleRightArrowClick = () => {
    if (index + 1 <= Nlimite) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div>
      <div className="videos-container">
        <div className="video-player">
          <img className='imagen' src={galeriaImagenes[index]} alt="Imagen" />
          <button className="arrow-button left-arrow" onClick={handleLeftArrowClick}>
            ◄
          </button>
          <button className="arrow-button right-arrow" onClick={handleRightArrowClick}>
            ►
          </button>
        </div>
        <div className="video-info">
          <h2>Título de la imagen</h2>
          <p>Descripción de la imagen</p>
        </div>
      </div>
    </div>
  );
};
