import React from 'react'
import { Link } from 'react-router-dom'
import { InstagramLogo, FacebookLogo, TwitterLogo, Phone } from '@phosphor-icons/react'
import './index.scss'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="sections">
            <span className='sections__title'>Conecta con nosotros</span>
            <ul className='sections__list'>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" className='sections__list__links'>
                        <InstagramLogo size={18} />
                        <span>Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" className='sections__list__links'>
                        <FacebookLogo size={18} />
                        <span>Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/home" target="_blank" className='sections__list__links'>
                        <TwitterLogo size={18} />
                        <span>Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="tel:+1123456789" className='sections__list__links'>
                        <Phone size={18} />
                        <span>1123456789</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className="sections">
            <span className='sections__title'>Navegación</span>
            <ul className='sections__list'>
                <li>
                    <Link className='sections__list__links' to='/'>
                        <span>Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link className='sections__list__links'>
                        <span>Acerca</span>
                    </Link>
                </li>
                <li>
                    <Link className='sections__list__links'>
                        <span>Ayuda/FAQ</span>
                    </Link>
                </li>
                <li>
                    <Link className='sections__list__links'>
                        <span>Reclamos</span>
                    </Link>
                </li>
                <li>
                    <Link className='sections__list__links'>
                        <span>Terminos de Uso</span>
                    </Link>
                </li>
                <li>
                    <Link className='sections__list__links'>
                        <span>Política de Privacidad</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="sections">
            <span className='sections__title'>Cuenta</span>
            <ul className='sections__list'>
                <li>
                    <Link className='sections__list__links'>
                        <span>Mi Cuenta</span>
                    </Link>
                </li>
                <li>
                    <Link className='sections__list__links'>
                        <span>Pedidos</span>
                    </Link>
                </li>
                <li>
                    <Link className='sections__list__links'>
                        <span>Favoritos</span>
                    </Link>
                </li>
                <li>
                    <Link className='sections__list__links'>
                        <span>Asociarse</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
