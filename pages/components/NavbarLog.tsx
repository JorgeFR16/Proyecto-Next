import React from 'react';
import '@/proyecto-next/styles/navbarLog.css'

function NavbarLog() {
  return (
    <header>
      <a className='buttonLogo' 
        href=""><img  
        src={require('../img/atom-logo.png')} 
        alt='Logo'
        width="80px" />
      </a>
      <nav>
        <ul>
          <a className='buttonLogIn' href='/#'><li>Iniciar Sesión</li></a>
          <a className='buttonLogOut' href='/#'><li>Registrarse</li></a>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarLog;