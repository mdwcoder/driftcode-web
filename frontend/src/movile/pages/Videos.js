import React, { useState } from 'react';
import { BarraSuperior } from '../components/BarraSuperior';
import '../../pages/videos.css';

const galeriaContext = require.context('../../materiales/videos', false, /\.(mp4|webm|ogv)$/);
const galeriavideos = galeriaContext.keys().map(galeriavideos => galeriaContext(galeriavideos));

const Nlimite = galeriavideos.length;

export const Videos = () => {
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
      <div className='BarraSuperiorsT'>
        <BarraSuperior />
      </div>
      <div className="videos-container">
        <div className="video-player">
          <video src={galeriavideos[index]} controls />
          <button className="arrow-button left-arrow" onClick={handleLeftArrowClick}>
            ◄
          </button>
          <button className="arrow-button right-arrow" onClick={handleRightArrowClick}>►</button>
        </div>
        <div className="video-info">
          <h2>Título del video</h2>
          <p>Descripción del video</p>
        </div>
      </div>
    </div>
  );
};

