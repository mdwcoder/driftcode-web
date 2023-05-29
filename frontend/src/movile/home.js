import React from 'react'
import { BarraSuperior } from './components/BarraSuperior'
import { Galeria } from './components/Galeria'
import Modelos from '../components/Modelos'
import { Separador } from '../components/Separador';
import './home.css'
const carpetaContext = require.context(
  '../materiales/coches_piezas',
  true,
  /^\.\/(?!.*\.(svg|txt|png)).*$/
);
const modelosimg = carpetaContext.keys().map((ruta) => {
  const imagen = carpetaContext(ruta);
  return imagen.default || imagen;
});

const modelosname = carpetaContext.keys().map((ruta) => {
  const carpetas = ruta.split('/');
  const nombreImagen = carpetas[carpetas.length - 1].replace(/\.[^.]+$/, '');
  return nombreImagen;
});

const Nproductos = modelosname.length; 


export const home = () => {
  const productos = Array.from({ length: Nproductos }, (_, index) => (
    <div className='modelo_individual'>
      <Modelos
      key={index}
      nombre={modelosname[index]}
      imagen={modelosimg[index]}
      url={"/"+modelosname[index]}
    />
    </div>
  ));

  return (
    <div>
      <BarraSuperior/>
      <Galeria/>
      <Separador/>
      <div className='productoaaaaa'>
        {productos}
      </div>
    </div>
  )
}
