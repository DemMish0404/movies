import React from 'react'

function RegainPass2() {
  return (
   <div className='signin'>
      <h2 className="signin__title"> Восстановить пароль</h2>

      <form action="" className="signin-form form-signin">
         <input type="text" placeholder='Придумайте новый пароль' className="for-form__input" />
         <input type="text" placeholder='Подтвердите новый пароль' className="for-form__input" />
         <button type='button' className="for-form__first-btn">Готово!</button>
         
      </form>
   </div>
  )
}

export default RegainPass2