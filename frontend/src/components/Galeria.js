import React, { useState } from 'react';
import './Galeria.css';

export const Galeria = ({ imagenes }) => {
  const medio = Math.round(imagenes.length / 2);
  const [imagenActiva, setImagenActiva] = useState(medio); // Definir la primera imagen como activa por defecto

  const handleMouseEnter = (index) => {
    setImagenActiva(index);
  };

  return (
    <div>
      <section className='Secgaleria'>
        {imagenes.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Imagen ${index + 1}`}
            className={index === imagenActiva ? 'imagen-activa' : ''}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        ))}
      </section>
    </div>
  );
};
