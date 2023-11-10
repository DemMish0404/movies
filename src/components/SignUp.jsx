import React from 'react'
import './SignUp.css'
import CheckBox from './CheckBox'

function SignUp() {
  return (
    <div className='signup'>
      <h2 className="signup__title"> Регистрация</h2>

      <form action="" className="signup-form form-signup">
        <input type="text" placeholder='Имя' className="for-form__input" />
        <input type="text" placeholder='Фамилия' className="for-form__input" />
        <input type="text" placeholder='Придумайте логин' className="for-form__input" />
        <input type="text" placeholder='Придумайте пароль' className="for-form__input" />
        <input type="text" placeholder='Повторите пароль' className="for-form__input" />
        <input type="text" placeholder='Номер телефона или e-mail' className="for-form__input" />
        <CheckBox value={true} >
          <div>
            <span>Соглашаюсь на условия</span> <a className="check-box__link" href="">политики конфиденциальности</a>
          </div>
        </CheckBox>
        <CheckBox value={true}>
          Соглашаюсь на обработку персональных данных
        </CheckBox>



        <button type='button' className="for-form__first-btn">Зарегистрироваться</button>

      </form>
    </div>
  )
}

export default SignUp