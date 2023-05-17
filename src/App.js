// Importar librerias
import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
// Importar Css
import './App.css'; // Ruta al archivo CSS
// Importar Componentes
import { Galeria } from './components/Galeria';
import { BarraSuperior } from './components/BarraSuperior';
import { Separador } from './components/Separador';
import { Productos } from './components/Productos';

function App() {
  return (
    <div>
      <BarraSuperior/>
      <Galeria/>
      <Separador/>
      <Productos/>
    </div>
  );
}

export default App;
