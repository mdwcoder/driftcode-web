import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [actualEmail, setActualEmail] = useState('');
  const [actualUser, setActualUser] = useState('');
  const [actualPassword, setActualPassword] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [secondariImages, setSecondariImages] = useState('');
  const [products, setProducts] = useState([]);

  // Al cargar el componente, verifica si hay datos de sesión almacenados en el navegador
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    const storedAdmin = localStorage.getItem('isAdmin');
    const storedEmail = localStorage.getItem('actualEmail');
    const storedUser = localStorage.getItem('actualUser');
    const storedPassword = localStorage.getItem('actualPassword');

    if (storedLoggedIn && storedLoggedIn === 'true') {
      setLoggedIn(true);
    }

    if (storedAdmin && storedAdmin === 'true') {
      setAdmin(true);
    }

    if (storedEmail) {
      setActualEmail(storedEmail);
    }

    if (storedUser) {
      setActualUser(storedUser);
    }

    if (storedPassword) {
      setActualPassword(storedPassword);
    }
  }, []);

  // Almacena los cambios en la sesión en el almacenamiento local del navegador
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
    localStorage.setItem('actualEmail', actualEmail);
    localStorage.setItem('actualUser', actualUser);
    localStorage.setItem('actualPassword', actualPassword);
  }, [isLoggedIn, isAdmin, actualEmail, actualUser, actualPassword]);

  // Función para realizar el inicio de sesión
  const login = (user, password) => {
    // Realizar la lógica de autenticación y verificación de credenciales aquí
    // Si las credenciales son válidas, establecer isLoggedIn en true y isAdmin según corresponda
    setLoggedIn(true);
    setAdmin(user === 'admin'); // Ejemplo: si el usuario es "admin", se establece como administrador

    // Almacenar el correo electrónico, nombre de usuario y contraseña en el estado actual
    setActualEmail(user);
    setActualUser(user);
    setActualPassword(password);
  };

  // Función para cerrar sesión
  const logout = () => {
    setLoggedIn(false);
    setAdmin(false);
    setActualEmail('');
    setActualUser('');
    setActualPassword('');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        isAdmin,
        setAdmin,
        actualEmail,
        setActualEmail,
        actualUser,
        setActualUser,
        actualPassword,
        setActualPassword,
        mainImage,
        setMainImage,
        secondariImages,
        setSecondariImages,
        products,
        setProducts,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
