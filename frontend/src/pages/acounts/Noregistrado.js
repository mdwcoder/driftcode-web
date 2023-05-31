import React from 'react'
import { BarraSuperior } from '../../components/BarraSuperior'
import { Link } from 'react-router-dom'
import './myaccount.css'

export const Noregistrado = () => {
  return (
    <div>
        <BarraSuperior/>
        <h1 className='title-myaccount-mensaje'>Inicia sesión o regístrate para poder acceder a tu cuenta</h1>
        <div className='BOTONES_sesion'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </div>
    </div>
  )
}
