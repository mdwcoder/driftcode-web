import React from 'react';
import './Productos.css';
import { Producto } from './Producto';
import axios from 'axios';

const Shop = ({ section }) => {

  const buscar = async () => {
    const nombreProducto = document.getElementById('nombreProducto');
    if (nombreProducto) {

      const response = await axios.get("http://127.0.0.1:5000/api/products/selection", {
        'section': section,
      });
      const products = response.data;
      
      return products;
    }
  }
  const products = buscar();
  const products_name = products.name;
  const products_description = products.description;
  const products_images = products.main_image;

  const Nproductos = products_name.length;

  const productos = Array.from({ length: Nproductos }, (_, index) => (
    <Producto
      className='producto_individual'
      key={index}
      nombre={products_name[index]}
      descripcion={products_description[index]}
      imagen={products_images[index]}
    />
  ));

  return (
    <div className='shop-page'>
      <div className='product-grid'>
        {productos}
      </div>
      <button onClick={buscar}>Buscar</button>
    </div>
  );
};

export default Shop;
