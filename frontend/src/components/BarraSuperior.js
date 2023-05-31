import React from 'react'
import { Link } from 'react-router-dom'
import './BarraSuperior.css'
const fotosContext = require.context('../materiales/Logos', false, /\.(png|jpe?g|svg|JPG)$/);
const fotos = fotosContext.keys().map(foto => fotosContext(foto));

export const BarraSuperior = () => {
  return (
    <div id='barrasuperior'>
    <section>
      <div id='logo-inicio'>
        <Link to="/">
        <img className='logo' src={fotos[0]} alt='logo' />
        </Link>
      </div>
    </section>
    <div className="search-box">
      <input type="text" placeholder="Search"/>
      <button></button>
    </div>
    <header className='nava'>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/merch">Merch</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/myaccount">Acount</Link></li>
        </ul>
      </nav>
    </header>
  </div>
  )
}
