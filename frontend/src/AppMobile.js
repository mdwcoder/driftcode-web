// Importar librerias
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { home } from './movile/home'
// Importar Css
import './App.css'; // Ruta al archivo CSS

function AppMobile() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
         <Route path='/' Component={home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppMobile;
