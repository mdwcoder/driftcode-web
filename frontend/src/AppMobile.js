// Importar librerias
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { home } from './movile/home'
// Importar Css
import './App.css'; // Ruta al archivo CSS
import { merch } from './movile/pages/merch';
import { Videos } from './movile/pages/Videos';
import { AuthProvider } from './pages/acounts/AuthContext';

function AppMobile() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <div>
        <Routes>
         <Route path='/' Component={home} />
         <Route path="/merch" Component={merch} />
         <Route path='/videos' Component={Videos} />
        </Routes>
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppMobile;
