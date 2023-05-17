import React from 'react'
import { BarraSuperior } from '../components/BarraSuperior'
import { Producto } from '../components/Producto';
import '../components/Productos.css'

const Nproductos = 5; 
const Nombres = ["Nombre1", "Nombre2", "Nombre3", "Nombre4", "Nombre5"];
const Descripciones = ["Descripción ejemplo 1", "Descripción ejemplo 2", "Descripción ejemplo 3", "Descripción ejemplo 4", "Descripción ejemplo 5"];

export const shop = () => {
  const productos = Array.from({ length: Nproductos }, (_, index) => (
    <Producto
      key={index}
      nombre={Nombres[index]}
      descripcion={Descripciones[index]}
    />
  ));

  return (
    <div>
      <BarraSuperior/>
      <div className="product-grid">
        {productos}
      </div>
    </div>
  )
}
