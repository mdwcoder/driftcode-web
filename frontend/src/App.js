// Importar librerias
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importar Css
import './App.css'; // Ruta al archivo CSS
import { home } from './pages/home';
import { merch } from './pages/merch';
import { Videos } from './pages/Videos';
import { universal } from './pages/models_pages/universal';
import MyAccount from './pages/acounts/myaccount';
import { E30 } from './pages/models_pages/E30';
import { E34 } from './pages/models_pages/E34';
import { E36 } from './pages/models_pages/E36';
import { E46 } from './pages/models_pages/E46';
import signup from './pages/acounts/signup';
import login from './pages/acounts/login';
import { AuthProvider } from './pages/acounts/AuthContext';
import { ProductoIndividual } from './pages/ProductoIndividual';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <div>
        <Routes>
          <Route path='/signup' Component={signup} />
          <Route path='/login' Component={login} />

          <Route path="/" Component={home} />
          <Route path="/merch" Component={merch} />
          <Route path="/videos" Component={Videos} />
          <Route path="/myaccount" Component={MyAccount} />

          <Route path="/UNIVERSAL" Component={universal} />
          <Route path="/E30" Component={E30} />
          <Route path='/E34' Component={E34} />
          <Route path='/E36' Component={E36} />
          <Route path="/E46" Component={E46} />

          <Route path="/pruebas" Component={ProductoIndividual} />
        </Routes>
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
