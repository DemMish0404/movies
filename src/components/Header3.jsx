import React, { useRef, useState } from 'react'
import './Header.scss'
import findIcon from '../assets/header/find-icon.svg'
import logo from '../assets/header/logo.svg'
import { Link } from 'react-router-dom'

function Header3() {

   const [burger, setBurger] = useState(false)
   





   return (
      <header className='header2'>
         <div className="header2__container">
            <div className={`header2__upper header3__upper  ${burger && 'active'}`}>

               <div className='header3__btns-left btns-left'>
                  <div className="btns-left__burger-btn burger-btn">
                     <div onClick={() => {
                        setBurger(prev => !prev)
                     }} className={`burger-btn__lines ${burger && 'active'}`}> <span></span></div>
                  </div>


                  <Link type='button' className='btns-left__btn-find btn-find'>
                     <img src={findIcon} alt="иконка войти" />
                  </Link>
               </div>


               <Link className='header__logo link' > <img src={logo} alt="логотип киноплатформы" /> </Link>

               <Link type='button' className='header__btn-sign-in btn-sign-in'>
                  Войти
               </Link>


            </div>
            <div className={`header2__down header3-menu ${burger && 'active'}`}>
               <nav className='header__nav nav-header ' >
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


                     <li className="nav-header__item"><Link className='nav-header__link link'>Категории</Link> </li>
                     <li className="nav-header__item"><Link className='nav-header__link link'>Категории</Link> </li>
                     <li className="nav-header__item"><Link className='nav-header__link link'>Категории</Link> </li>
                     <li className="nav-header__item"><Link className='nav-header__link link'>Категории</Link> </li>
                     <li className="nav-header__item"><Link className='nav-header__link link'>Категории</Link> </li>
                     <li className="nav-header__item"><Link className='nav-header__link link'>Категории</Link> </li>
                     <li className="nav-header__item"><Link className='nav-header__link link'>Категории</Link> </li>
                     <li className="nav-header__item"><Link className='nav-header__link link'>Категории</Link> </li>

                  </ul>
               </nav>
            </div>

         </div>

      </header>
   )
}

export default Header3