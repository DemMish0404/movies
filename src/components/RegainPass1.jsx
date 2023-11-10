import React from 'react'

function RegainPass1() {
  return (
   <div className='signin'>
      <h2 className="signin__title"> Восстановить пароль</h2>

      <form action="" className="signin-form form-signin">
         <input type="text" placeholder='Почта или номер телефона' className="for-form__input" />
         <input type="text" placeholder='Полученный код' className="for-form__input" />
         <button type='button' className="for-form__first-btn">Далее</button>
         
   </form>
   </div>
  )
}

export default RegainPass1