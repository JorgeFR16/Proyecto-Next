import React from 'react';

function NavbarLog() {
  return (
    <header>
      <a className='buttonLogo' 
        href=""><img  
        src={require('../img/atom_logo.png')} 
        alt='Logo'
        width="250px" />
      </a>
      <nav>
        <ul className='logbar'>
          <a className='buttonLogin' 
            href=''><li>Iniciar Sesión</li>
          </a>
          <a className='buttonLogout' 
            href=''><li>Registrarse</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarLog;