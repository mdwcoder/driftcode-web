import React from 'react'
import './Productos.css'

export const Producto = ({ nombre, descripcion }) => {
  return (
    <div>
      <div className="product">
        <img src="https://www.catalogomoda.com/fotos/sonajero-musical-babykey-miniland-baby-foto-347380.jpg" alt="Imagen" />
        <div className="product-info">
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  )
}
