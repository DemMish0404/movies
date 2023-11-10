import React from 'react'
import findIcon from '../assets/header/find-icon.svg'
import logo from '../assets/header/logo.svg'

import './Header.scss'
import { Link } from 'react-router-dom'

function Header2() {
  return (
    <header class='header2'>
      <div class="header2__container">
         <div class="header2__upper">
            <Link type='button' class='header__btn-find btn-find'>
               <img src={findIcon} alt="иконка войти" />
            </Link>

            <Link class='header__logo link' > <img src={logo} alt="логотип киноплатформы" /> </Link>

            <Link type='button' class='header__btn-sign-in btn-sign-in'>
               Войти
            </Link>


         </div>
         <div class="header2__down">
            <nav class='header__nav nav-header' >
                  <ul class='nav-header__list'>
                  <li class="nav-header__item">
                     <Link class='nav-header__link link'>Афиша</Link>
                  </li>
                  <li class="nav-header__item"> <Link class='nav-header__link link'>Медиа</Link></li>
                  <li class="nav-header__item"><Link class='nav-header__link link'>Фильмы</Link> </li>
                  <li class="nav-header__item"><Link class='nav-header__link link'>Актёры</Link> </li>
                  <li class="nav-header__item"> <Link class='nav-header__link link'>Новости</Link></li>
                  <li class="nav-header__item"> <Link class='nav-header__link link'>Подборки</Link></li>
                  <li class="nav-header__item"><Link class='nav-header__link link'>Категории</Link> </li>
                  </ul>
               </nav>
         </div>

      </div>

    </header>
  )
}

export default Header2