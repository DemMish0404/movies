import React from 'react'
import findIcon from '../assets/header/find-icon.svg'
import logo from '../assets/header/logo.svg'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header1({
  textSignIn
}) {
  return (
    <header className='header' >
      <div className="header__container">
         <Link className='header__logo link' > <img src={logo} alt="логотип киноплатформы" /> </Link>

         <nav className='header__nav nav-header' >
            <ul className='nav-header__list'>
              <li className="nav-header__item">
                <Link className='nav-header__link link'>Афиша</Link>
              </li>
              <li className="nav-header__item"> <Link className='nav-header__link link'>Медиа</Link></li>
              <li className="nav-header__item"><Link className='nav-header__link link'>Фильмы</Link> </li>
              <li className="nav-header__item"><Link className='nav-header__link link'>Актёры</Link> </li>
              <li className="nav-header__item"> <Link className='nav-header__link link'>Новости</Link></li>
              <li className="nav-header__item"> <Link className='nav-header__link link'>Подборки</Link></li>
              <li className="nav-header__item"><Link className='nav-header__link link'>Категории</Link> </li>
            </ul>
         </nav>

         <div className="header__buttons">
          <Link type='button' className='header__btn-find btn-find'>
            <img src={findIcon} alt="иконка войти" />
          </Link>
          <Link type='button' className='header__btn-sign-in btn-sign-in'>
            Войти
          </Link>
          
         </div>

      </div>
    </header>
  )
}

export default Header1