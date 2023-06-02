import React from 'react';
import NavbarLog from './components/NavbarLog';
import ButtonMenu from './components/ButtonMenu'

export default function Home() {
  return (
    <div className='bodyComponent'>
      <div className='navbarComponent'>
        <NavbarLog />
      </div>
      <div className='menuHome'>
        <ButtonMenu 
          apartado='Destacados' />
        <ButtonMenu 
          apartado='Estrenos' />
        <ButtonMenu 
          apartado='Ofertas' />
        <ButtonMenu 
          apartado='Noticias' />
      </div>
    </div>
  )
}

