import React, { useState } from 'react'
import './FilmCard1.scss'
import { Link } from 'react-router-dom'

function FilmCard1({
   LinkToImage, rating , FilmName, Genres
}) {
   const [card, setCard] = useState(false)

  return (
    <Link onClick={() => {
      setCard(prev => !prev)
   }} className={`first-card  ${card && 'active'}`} > 
      <div className="first-card__img-block ">
         <div  className="first-card__img">
            
            
            <img src={LinkToImage} alt="картинка фильма для карточка" />
         </div>
         <div className="first-card__rating">{rating}</div>
         {/* <div className="first-card__btn"> <Link  className='link'> Карточка фильма </Link> </div> */}

      </div>

      <div className="first-card__text-block">
         <div className="first-card__label"> {FilmName} </div>
         <div className="first-card__genres">   {Genres} </div>
      </div>

    </Link>
  )
}

export default FilmCard1