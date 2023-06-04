import React from 'react'
import { BarraSuperior } from '../components/BarraSuperior'
import GaleriaProducto from '../components/GaleriaProducto'
import ProductoVenta from '../components/ProductoVenta'
import './productoindividual.css'

const imagenes = [
    "https://motor.elpais.com/wp-content/uploads/2018/11/tesla-roadster-000_1920x1600c-1800x728.jpg",
    "https://1.bp.blogspot.com/-7Yzw8kOWGG4/VP0fEd6ae_I/AAAAAAAABNY/pvk-PsYJ9Zk/s1600/imagenes%2Bde%2Bcochecitos.jpg",
    "https://1.bp.blogspot.com/-7Yzw8kOWGG4/VP0fEd6ae_I/AAAAAAAABNY/pvk-PsYJ9Zk/s1600/imagenes%2Bde%2Bcochecitos.jpg",
    "https://1.bp.blogspot.com/-7Yzw8kOWGG4/VP0fEd6ae_I/AAAAAAAABNY/pvk-PsYJ9Zk/s1600/imagenes%2Bde%2Bcochecitos.jpg",
    "https://1.bp.blogspot.com/-7Yzw8kOWGG4/VP0fEd6ae_I/AAAAAAAABNY/pvk-PsYJ9Zk/s1600/imagenes%2Bde%2Bcochecitos.jpg",
    "https://1.bp.blogspot.com/-7Yzw8kOWGG4/VP0fEd6ae_I/AAAAAAAABNY/pvk-PsYJ9Zk/s1600/imagenes%2Bde%2Bcochecitos.jpg",
    "https://1.bp.blogspot.com/-7Yzw8kOWGG4/VP0fEd6ae_I/AAAAAAAABNY/pvk-PsYJ9Zk/s1600/imagenes%2Bde%2Bcochecitos.jpg"
]

const costroejemplo = "10.30"
const costoenvidoEjemplo = "1.12"

const product_name = "Test name"

const texto_prueba = "Este es mi texto de prueba\nLinea 2 y esta es la \nLinea 3"

const columna1 = [
  "Nombre",
  "Precio",
  "Costo de envio",
  "Tamaño",
  "Peso",
  "Dimensiones",
  "Color"
]

const columna2 = [
  "Test name",
  "$ 10.30",
  "$ 1.12",
  "8cm2",
  "1kg",
  "4x4",
  "Negro"
]

export const ProductoIndividual  = () => {
  return (
    <div>
      <BarraSuperior/>
      <div className='content_producto_individual'>
        <ProductoVenta precio={costroejemplo} costoEnvio={costoenvidoEjemplo} product_name={product_name} texto={texto_prueba} columna1={columna1} columna2={columna2}/>
        <GaleriaProducto imagenes={imagenes}/>
      </div>
    </div>
  )
}
