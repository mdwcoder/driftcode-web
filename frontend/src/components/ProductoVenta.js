import React from 'react';
import './ProductoVenta.css';

const ProductoVenta = ({ precio, costoEnvio, product_name, texto, columna1, columna2 }) => {
  const handleButtonClick = (buttonName) => {
    console.log(`Se ha pulsado el botón: ${buttonName}`);
  }; 

  function generarTabla(columna1, columna2) {
    let tablaHTML = '';

    tablaHTML += '<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">';
    tablaHTML += '<tbody>';

    columna1.forEach((elemento, index) => {
      tablaHTML += `<tr><th style="padding: 10px; text-align: left; background-color: #f2f2f2;">${elemento}</th>`;
      tablaHTML += `<td style="padding: 10px; border-bottom: 1px solid #ddd;">${columna2[index]}</td></tr>`;
    });

    tablaHTML += '</tbody></table>';

    return tablaHTML;
  }

  const tablaHTML = generarTabla(columna1, columna2);

  return (
    <div className="caja-venta-producto">
      <div className="producto-info">
        <h2 className="titulo">{product_name}</h2>
        <p className="precio">Precio: ${precio}</p>
        <p className="envio">Costo de envío: ${costoEnvio}</p>
      </div>
      <button className="boton-compra" onClick={() => handleButtonClick('Comprar ahora')}>
        Comprar ahora
      </button>
      <button className="boton-compra" onClick={() => handleButtonClick('Añadir al carrito')}>
        Añadir al carrito
      </button>
      <h2 className="titulo">Descripción</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{texto}</p>
      <div dangerouslySetInnerHTML={{ __html: tablaHTML }}></div>
    </div>
  );
};

export default ProductoVenta;
