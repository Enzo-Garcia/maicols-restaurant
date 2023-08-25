import React from 'react'
import { Link } from 'react-router-dom'
import { Basket } from '@phosphor-icons/react'
import './index.scss';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='menu'>
        <Link to='/' className='menu__links'>INICIO</Link>
        <Link to='/products' className='menu__links'>COMPRAR</Link>
        <Link to='/nosotros' className='menu__links'>NOSOTROS</Link>
      </div>
      <div className='account'>
        <Link to='/cart' className='account__link'>
          <Basket className='account__link__cart' size={25} />
        </Link>
        <Link to='/login' className='account__link'>IDENTIFICARSE</Link>
        <Link to='/signup' className='account__link'>CREAR CUENTA</Link>
      </div>
    </div>
  )
}
