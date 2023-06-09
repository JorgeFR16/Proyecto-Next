import React from 'react';

function NavbarLog() {
  return (
    <header>
      <a className='buttonLogo' href=""><img src="" alt="" />Logo</a>
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