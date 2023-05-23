import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Función para verificar si es un dispositivo móvil
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Componente a cargar según el tipo de dispositivo
const RootComponent = isMobileDevice() ? require('./AppMobile').default : require('./App').default;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
