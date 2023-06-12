import React from 'react';

function NavbarLog() {
  return (
    <div>
      <nav>
        <a className='buttonLogo' 
          href="#">
          <img src={require('../img/atom_logo.png')} 
          alt='Logo'
          width="250px" />
        </a>
        <ul>
          <button type="button" className="btn btn-primary btn-lg">Iniciar seción</button>
          <button type="button" className="btn btn-secondary btn-lg">Registrarse</button>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarLog;