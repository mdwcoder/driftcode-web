import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { BarraSuperior } from '../../components/BarraSuperior';

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = e.target.nombre.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('http://127.0.0.1:5000/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log('Datos enviados correctamente');
        navigate('/login');
      } else {
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <BarraSuperior></BarraSuperior>
      <div className="signup-container">
        <h1 className="signup-title">Sign up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="signup-label">
            User:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="signup-input"
          />

          <label htmlFor="email" className="signup-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="signup-input"
          />

          <label htmlFor="password" className="signup-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="signup-input"
          />

          <button type="submit" className="signup-button">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
