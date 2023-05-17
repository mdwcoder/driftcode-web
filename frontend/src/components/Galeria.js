import React from 'react'
import './Galeria.css'

export const Galeria = ({ imagenes }) => {
  return (
    <div>
      <section className='Secgaleria'>
        {imagenes.map((url, index) => (
          <img key={index} src={url} alt={`Imagen ${index + 1}`} />
        ))}
      </section>
    </div>
  )
}
