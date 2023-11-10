import React from 'react'
import "./SignIn.css"
import { Link } from 'react-router-dom'
import vk1 from '../assets/soc-network/vk1.svg'
import facebook1 from '../assets/soc-network/facebook1.svg'
import gmail1 from "../assets/soc-network/gmail1.svg"
import twitter1 from '../assets/soc-network/twitter1.svg'


function SignIn() {
   return (
      <div className='signin'>
         <h2 className="signin__title"> Войти</h2>

         <form action="" className="signin-form form-signin">
            <input type="text" placeholder='Логин, почта или телефон' className="for-form__input" />
            <input type="text" placeholder='Ваш пароль' className="for-form__input" />
            <button type='button' className="for-form__first-btn">Войти</button>
            <button type='button' className="for-form__second-btn">Зарегистрироваться</button>
         </form>

         <div className="signin__lower-block">
            <Link className="signin__regain-pass link"> Восстановить пароль</Link>
            <div className="signin__soc-networks">
               <Link className=' signin__soc-network link '> <img src={vk1} alt="иконка соц сети" /> </Link>
               <Link className=' signin__soc-network link '> <img src={facebook1} alt="иконка соц сети" /> </Link>
               <Link className=' signin__soc-network link '> <img src={gmail1} alt="иконка соц сети" /> </Link>
               <Link className=' signin__soc-network link '> <img src={twitter1} alt="иконка соц сети" /> </Link>
            </div>

         </div>

      </div>
   )
}

export default SignIn