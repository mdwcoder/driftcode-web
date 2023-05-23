import React from 'react'
import './Productos.css'
import { Producto } from './Producto';

const Shop = ({carpetaContext}) => {
      const modelosimg = carpetaContext.keys().map((ruta) => {
        const imagen = carpetaContext(ruta);
        return imagen.default || imagen;
      });
      
      const modelosname = carpetaContext.keys().map((ruta) => {
        const carpetas = ruta.split('/');
        const nombreImagen = carpetas[carpetas.length - 1].replace(/\.[^.]+$/, '');
        return nombreImagen;
      });
    
    
    const Descripciones = ["", "", "", "", "", ""]; // Prueba, cambiar a leer txt
    const Nproductos = modelosname.length; 

    const productos = Array.from({ length: Nproductos }, (_, index) => (
        <Producto
          key={index}
          nombre={modelosname[index]}
          descripcion={Descripciones[index]}
          imagen={modelosimg[index]}
        />
      ));

  return (
    <div className='shop-page'>
        <div className='product-grid'>
            {productos}
        </div>
    </div>
  )
}
export default Shop;
