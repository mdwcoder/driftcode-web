import React, { useState } from 'react';
import './GaleriaProducto.css'

const GaleriaProducto = ({ imagenes }) => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
  
    const seleccionarImagen = (imagen) => {
      setImagenSeleccionada(imagen);
    };
  
    return (
      <section className="galeria-producto">
        <div className="lista-imagenes">
          {imagenes.map((imagen, index) => (
            <div
              className={`imagen ${imagen === imagenSeleccionada ? 'seleccionada' : ''}`}
              key={index}
              onClick={() => seleccionarImagen(imagen)}
            >
              <img src={imagen} alt={`Imagen ${index}` } className='imagen_en_lista' />
            </div>
          ))}
        </div>
        <div className="imagen-seleccionada">
          <img src={imagenSeleccionada} alt="Imagen seleccionada" />
        </div>
      </section>
    );
  };
  
  export default GaleriaProducto;
