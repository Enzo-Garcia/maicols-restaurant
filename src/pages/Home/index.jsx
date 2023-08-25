import React from 'react'
import './index.scss'
import img1 from '../../assets/maicols_icon4v2.png'

export const Home = () => {
  return (
    <div className='home__container'>
      <main className='main__container'>
        <article>
          <div className="logo__container">
            <img src={img1} alt="" className='maicols__logo'/>
          </div>
          <div className="text__container">
            <span className='logo__text'>hola</span>
          </div>
        </article>
      </main>
    </div>
  )
}