import React from 'react';
import { BarraSuperior } from '../../components/BarraSuperior';
import { Link } from 'react-router-dom'
import './myaccount.css'


function MyAccount() {
  return (
    <div>
      <BarraSuperior/>
      <div className='Botones_incio_sesion'>
        <Link className="go-login-button" to={'/login'} >Login</Link>
        <Link className="go-signup-button" to={'/signup'}>Sign Up</Link>
      </div>
    </div>

  );
}

export default MyAccount;
