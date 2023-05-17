import React from 'react'
import './home.css'
import '../components/Productos.css'
import { BarraSuperior } from '../components/BarraSuperior'
import { Galeria } from '../components/Galeria'
import { Separador } from '../components/Separador'
import { Producto } from '../components/Producto'

const Nproductos = 6; 
const Nombres = ["Nombre1", "Nombre2", "Nombre3", "Nombre4", "Nombre5", "Nombre6"];
const Descripciones = ["Descripción ejemplo 1", "Descripción ejemplo 2", "Descripción ejemplo 3", "Descripción ejemplo 4", "Descripción ejemplo 5", "Descripción ejemplo 6"];

export const home = () => {
  const productos = Array.from({ length: Nproductos }, (_, index) => (
    <Producto
      key={index}
      nombre={Nombres[index]}
      descripcion={Descripciones[index]}
    />
  ));

  return (
    <div>
        <header>
          <nav className='nav1'>
            <BarraSuperior/>
          </nav>
          <Galeria/>
        </header>
        <Separador/>
        <div className='product-grid'>
          {productos}
        </div>
    </div>
  )
}
