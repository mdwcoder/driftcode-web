import React from 'react';
import './signup.css';
import { BarraSuperior } from '../../components/BarraSuperior';

function signup() {
  return (
    <div>
      <BarraSuperior></BarraSuperior>
    <div className="signup-container">
      <h1 className="signup-title">Sign up</h1>
      <form className="signup-form">
        <label htmlFor="nombre" className="signup-label">User:</label>
        <input type="text" id="nombre" name="nombre" required className="signup-input" />

        <label htmlFor="email" className="signup-label">Email:</label>
        <input type="email" id="email" name="email" required className="signup-input" />

        <label htmlFor="password" className="signup-label">Password:</label>
        <input type="password" id="password" name="password" required className="signup-input" />

        <button type="submit" className="signup-button">Registrarse</button>
      </form>
    </div>
    </div>
  );
}

export default signup;
