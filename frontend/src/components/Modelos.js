import React from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';
import './negativo_modelos.css';

const Modelos = ({ nombre, imagen, url }) => {
  return (
    <div>
      <div className={`product1 ${nombre}`}>
        <Link className='button-models' to={url}>
          <div className="product-container">
            <img src={imagen} alt="Imagen" />
            <div className="product-overlay"></div>
            <div className="modelname">
              <h3>{nombre}</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Modelos;
