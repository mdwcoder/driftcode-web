import React from 'react'
import { Link } from 'react-router-dom'
import './Productos.css'
import './negativo_modelos.css'

export const Producto = ({ nombre, descripcion, imagen, url }) => {
  return (
    <div>
      <div className={`product ${nombre}`}>
        <Link className='button-models' to={url}>
          <div className="product-container">
            <img src={imagen} alt="Imagen" />
            <div className="product-overlay"></div>
            <div className="product-info">
              <h3>{nombre}</h3>
              <p>{descripcion}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>

  )
}
