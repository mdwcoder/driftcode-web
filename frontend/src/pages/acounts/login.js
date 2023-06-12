import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { BarraSuperior } from '../../components/BarraSuperior';
import axios from 'axios';
import './login.css';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setLoggedIn, setAdmin, setActualEmail, setActualUser, setActualPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const isEmail = validateEmail(userEmail); // Validar si es un correo electrónico

      const response = await axios.post('http://127.0.0.1:5000/api/login', {
        [isEmail ? 'email' : 'user']: userEmail, // Usar 'email' o 'user' según la validación
        password,
      });
      setMessage(response.data.message);

      if (response.data.Authenticated === true) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }

      if (response.data.admin === '1') {
        setAdmin(true);
      } else {
        setAdmin(false);
      }

      setActualUser(response.data.user);
      setActualEmail(response.data.email);
      setActualPassword(response.data.password);
      console.log(response.data.user);
      console.log(response.data);

      navigate('/myaccount'); // Redirecciona al componente MyAccount
    } catch (error) {
      setMessage('Error al iniciar sesión');
      console.error(error);
    }
  };

  // Función para validar si es un correo electrónico
  const validateEmail = (value) => {
    // Expresión regular para validar un correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div>
      <BarraSuperior />
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="userEmail" className="login-label">
            Usuario o Email:
          </label>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            required
            className="login-input"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Login;
