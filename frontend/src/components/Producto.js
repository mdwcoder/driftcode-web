import React from 'react'
import { Link } from 'react-router-dom'
import './Productos.css'

export const Producto = ({ nombre, descripcion, imagen, url }) => {
  return (
    <div className={nombre}>
      <Link className='button-models' to={url}>
        <div className="product">
          <img src={imagen} alt="Imagen" />
          <div className="product-info">
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
