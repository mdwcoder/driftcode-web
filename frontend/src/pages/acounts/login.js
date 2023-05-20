import React from 'react';
import './login.css';
import { BarraSuperior } from '../../components/BarraSuperior';
function login() {
return (
    <div>
        <BarraSuperior></BarraSuperior>
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form className="login-form">
            <label htmlFor="email" className="login-label">Email:</label>
            <input type="email" id="email" name="email" required className="login-input" />  
            <label htmlFor="password" className="login-label">Password:</label>
                <input type="password" id="password" name="password" required className="login-input" />

                <button type="submit" className="login-button">Iniciar sesión</button>
            </form>
        </div>
    </div>
);
}

export default login;
