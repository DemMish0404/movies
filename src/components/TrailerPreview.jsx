import React, { useState } from 'react'
import './TrailerPreview.scss'
import watchSmall from '../assets/firstblock/watchBTNsmall.svg'

function TrailerPreview({
   LinkToTrailerPreview, NameOfFilmPreview
}) {

   const [trailerPreview, setTrailerPreview] = useState(false);
   return (
      <div onClick={() => {
         setTrailerPreview(prev => !prev)
      }} className={`all-trailers__trailer-preview trailer-preview ${trailerPreview && 'active'}`} >
         <div className="trailer-preview__media-block">
            <img src={LinkToTrailerPreview} alt="превью трейлера" />
            <div className='play'>
               <img src={watchSmall} alt="иконка начать видео" />
            </div>
         </div>
         <div className="trailer-preview__text">{NameOfFilmPreview}</div>
      </div>
   )
}

export default TrailerPreview