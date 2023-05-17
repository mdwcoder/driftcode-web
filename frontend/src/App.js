// Importar librerias
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importar Css
import './App.css'; // Ruta al archivo CSS
import { home } from './pages/home';
import { shop } from './pages/shop';
import { merch } from './pages/merch';
import { videos } from './pages/videos';
import { photos } from './pages/photos';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={home} />
          <Route path="/shop" Component={shop} />
          <Route path="/merch" Component={merch} />
          <Route path="/videos" Component={videos} />
          <Route path="/photos" Component={photos} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
