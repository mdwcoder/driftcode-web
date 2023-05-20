import React, { useState } from 'react';
import './Galeria.css';

export const Galeria = ({ imagenes }) => {
  const [imagenActiva, setImagenActiva] = useState(null);

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
