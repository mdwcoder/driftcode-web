import React from 'react'
import './Productos.css'

export const Producto = ({ nombre, descripcion, imagen }) => {
  return (
    <div>
      <div className="product">
        <img src={imagen} alt="Imagen" />
        <div className="product-info">
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  )
}
