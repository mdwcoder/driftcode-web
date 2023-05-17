import React from 'react'
import { Link } from 'react-router-dom'
import './BarraSuperior.css'

export const BarraSuperior = () => {
  return (
    <div id='barrasuperior'>
    <div id='logo-inicio'>Logo</div>
    <div class="search-box">
      <input type="text" placeholder="Search"/>
      <button></button>
    </div>
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/merch">Merch</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/photos">Photos</Link></li>
          <li className='acount_button'><Link to="/login">Log in</Link></li>
          <li className='acount_button'><Link to="/register">Sign up</Link></li>
        </ul>
      </nav>
    </header>
  </div>
  )
}
