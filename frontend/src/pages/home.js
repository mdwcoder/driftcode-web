import React from 'react'
import './home.css'
import '../components/negativo_modelos.css'
import './productgrid.css'
import { BarraSuperior } from '../components/BarraSuperior'
import { Galeria } from '../components/Galeria'
import { Separador } from '../components/Separador'
import Modelos from '../components/Modelos'
const galeriaContext = require.context('../materiales/coches_fotos', false, /\.(jpe?g|JPG|jpg)$/);
const galeriaimg = galeriaContext.keys().map(galeriaimg => galeriaContext(galeriaimg));
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
// test 
export const home = () => {
  const productos = Array.from({ length: Nproductos }, (_, index) => (
    <Modelos
      key={index}
      nombre={modelosname[index]}
      imagen={modelosimg[index]}
      url={"/"+modelosname[index]}
    />
  ));

  return (
    <div>
        <header>
          <nav className='nav1'>
            <BarraSuperior/>
          </nav>
          <Galeria imagenes={galeriaimg} />
        </header>
        <Separador/>
        <section className='productos'>
          <div className='product-grid'>
            {productos}
          </div>
        </section>
    </div>
  )
}
