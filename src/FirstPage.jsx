import React, { useState } from 'react'
import './FirstPage.scss'
import FilmCard1 from './components/FilmCard1'
import { Link } from 'react-router-dom'
import like from './assets/firstblock/like.svg'
import watch from './assets/firstblock/watchBTN.svg'
import watchSmall from './assets/firstblock/watchBTNsmall.svg'
import TrailerPreview from './components/TrailerPreview'


function FirstPage({
  howManyDislikes, howManyLikes
}) {

  const [focused, setFocused] = useState(false);
  const [trailerPreview, setTrailerPreview] = useState(false);

  return (
    <>
      <div className="films-nowadays">
        <div className="film-nowadays__for-bg">
          <div className="films-nowadays__container">


            <div className="films-nowadays__tabs tabs">
              <div className="container-for-nav-and-nav">
                <h2 className='films-nowadays__title' >Сейчас в кино </h2>
                <span className="films-nowadays__decor"></span>
                <div className="tabs__nav">

                  <div className="tabs__link">
                    <a href="#tabs__item01">Все</a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item02">Боевики </a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item03">Приключения </a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item04">Комедии </a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item05">Фантастика  </a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item06">Триллеры</a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item07">Драма </a>
                  </div>

                </div>


              </div>

              <div className="tabs__body">
                <div id='tabs__item01' className="tabs__item">
                  <div className="cards-by-genre" id="all">
                    <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                    <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                    <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                    <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                    <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                    <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                    <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                    <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                  </div>
                  <div className="container-for-btn">
                    <button className='more-films' type='button'> Больше фильмов </button>
                  </div>
                </div>
                <div id='tabs__item02' className="tabs__item"> 2 </div>
                <div id='tabs__item03' className="tabs__item"> 3 </div>
                <div id='tabs__item04' className="tabs__item"> 4 </div>
                <div id='tabs__item05' className="tabs__item"> 5 </div>
                <div id='tabs__item06' className="tabs__item"> 6 </div>
                <div id='tabs__item07' className="tabs__item"> 7 </div>

              </div>

            </div>


          </div>
        </div>

      </div>


      <div className="trailer">
        <div className="trailer__container">
          <div className="trailer__upper-block">
            <h3 className="trailer__title">Новые трейлеры</h3>

            <Link className='trailer__link'> Все трейлеры</Link>
          </div>
          <div onClick={() => {
            setFocused(prev => !prev)
          }} className={`trailer__media-block ${focused && 'active'}`}>
            <div className="trailer__movie-trailer">
              <img src="https://w.forfun.com/fetch/ed/ed16411652a506979f8d2c25bd9439ef.jpeg?w=2200" alt="трейлер начало превью" />
            </div>
            <div className="trailer__watch-btn">
              <img src={watch} alt="иконка начать видео" />
            </div>

          </div>
          <div className="trailer__lower-block">
            <h3 className="trailer__film-name">Форсаж 9</h3>
            <div className="trailer__marks">

              <div className="trailer__mark-with-numbers">
                <div className="trailer__mark like"><img src={like} alt="like picture" /></div>
                <div className="trailer__numbers">{howManyLikes}</div>
              </div>

              <div className="trailer__mark-with-numbers">
                <div className="trailer__mark dislike"> <img src={like} alt="dislike picture" /></div>
                <div className="trailer__numbers">{howManyDislikes}</div>
              </div>

            </div>
          </div>
        </div>

      </div>


      <div className="all-trailers">
        <div className="all-trailers__container">
            <TrailerPreview LinkToTrailerPreview={'https://w.forfun.com/fetch/6b/6b8f0e16bb928a751e6ae1b3c9034e22.jpeg'} NameOfFilmPreview={'Мулан'} />
            <TrailerPreview LinkToTrailerPreview={'https://4kwallpapers.com/images/wallpapers/fast-furious-9-f9-vin-diesel-jordana-brewster-ludacris-2880x1800-6301.jpg'} NameOfFilmPreview={'Форсаж 9'} />
            <TrailerPreview LinkToTrailerPreview={'https://papik.pro/grafic/uploads/posts/2023-03/1680225359_papik-pro-p-poster-chernaya-vdova-22.jpg'} NameOfFilmPreview={'Черная вдова'} />
            <TrailerPreview LinkToTrailerPreview={'https://scarfilm.org/wp-content/uploads/2020/11/z2utga1wggesspi6koxeo66lvlx-2000x833.jpg'} NameOfFilmPreview={'Тихое место 2'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />

            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
            <TrailerPreview LinkToTrailerPreview={'https://i.ytimg.com/vi/m_aPQA9TT9Q/maxresdefault.jpg'} NameOfFilmPreview={'Crazy stupid love'} />
        
        </div>
      </div>
      

      <div className="popular-films">
        <div className="popular-films__container">
        <div className="films-nowadays__tabs tabs ">
              <div className="container-for-nav-and-nav">
                <h2 className='films-nowadays__title' >Популярные фильмы </h2>
                <span className="films-nowadays__decor"></span>
                <div className="tabs__nav">

                  <div className="tabs__link">
                    <a href="#tabs__item-a1">Всё время </a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item-a2">2024 </a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item-a3">2023</a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item-a4">2022 </a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item-a5">2021  </a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item-a6">2020</a>
                  </div>
                  <div className="tabs__link">
                    <a href="#tabs__item-a7">2019 </a>
                  </div>

                </div>


              </div>

              <div className="tabs__body">
                <div id='tabs__item-a1' className="tabs__item">
                  <div className="slider-block">
                    <div className="slider-block__wrapper">
                      <div className="slider-block__slides">
                        <div className="slider-block__slide slider-block__flex-box-for-slide" id="slide-1">
                          <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                          
                        </div>
                        <div className="slider-block__slide slider-block__flex-box-for-slide" id="slide-2">
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/originals/32/3e/12/323e12cfc28e69ba500335d6d01eace0.jpg'} rating={'4.5'} FilmName={"Crazy stupid love"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/originals/32/3e/12/323e12cfc28e69ba500335d6d01eace0.jpg'} rating={'4.5'} FilmName={"Crazy stupid love"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/originals/32/3e/12/323e12cfc28e69ba500335d6d01eace0.jpg'} rating={'4.5'} FilmName={"Crazy stupid love"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/originals/32/3e/12/323e12cfc28e69ba500335d6d01eace0.jpg'} rating={'4.5'} FilmName={"Crazy stupid love"} Genres={'Триллер, драма, криминал'} />
                          
                        </div>
                        <div className="slider-block__slide slider-block__flex-box-for-slide" id="slide-3">
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/736x/6d/10/6c/6d106ca3bdc9cb49a51a8d93378353d8--summertime-movie-happy-movie.jpg'} rating={'4.5'} FilmName={"The way way back"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/736x/6d/10/6c/6d106ca3bdc9cb49a51a8d93378353d8--summertime-movie-happy-movie.jpg'} rating={'4.5'} FilmName={"The way way back"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/736x/6d/10/6c/6d106ca3bdc9cb49a51a8d93378353d8--summertime-movie-happy-movie.jpg'} rating={'4.5'} FilmName={"The way way back"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/736x/6d/10/6c/6d106ca3bdc9cb49a51a8d93378353d8--summertime-movie-happy-movie.jpg'} rating={'4.5'} FilmName={"The way way back"} Genres={'Триллер, драма, криминал'} />
                          
                        </div>
                      </div>
                      <nav className="slider-block__nav">
                        <Link to="#slide-1" id='previous-in-slider' className="slider-block__link  link"> </Link>
                        <Link to='#slide-2' id='next-in-slider'  className="slider-block__link link"></Link>
                        
                        
                      </nav>
                    </div>
                  </div>
                  
                </div>
                <div id='tabs__item-a2' className="tabs__item"> 

                  <div className="slider-block">
                    <div className="slider-block__wrapper">
                      <div className="slider-block__slides">
                        <div className="slider-block__slide slider-block__flex-box-for-slide" id="slide-1">
                          <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c58b4681277211.5cfa6e54a6d3d.jpg'} rating={'4.5'} FilmName={"Joker"} Genres={'Триллер, драма, криминал'} />
                          
                        </div>
                        <div className="slider-block__slide slider-block__flex-box-for-slide" id="slide-2">
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/originals/32/3e/12/323e12cfc28e69ba500335d6d01eace0.jpg'} rating={'4.5'} FilmName={"Crazy stupid love"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/originals/32/3e/12/323e12cfc28e69ba500335d6d01eace0.jpg'} rating={'4.5'} FilmName={"Crazy stupid love"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/originals/32/3e/12/323e12cfc28e69ba500335d6d01eace0.jpg'} rating={'4.5'} FilmName={"Crazy stupid love"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/originals/32/3e/12/323e12cfc28e69ba500335d6d01eace0.jpg'} rating={'4.5'} FilmName={"Crazy stupid love"} Genres={'Триллер, драма, криминал'} />
                          
                        </div>
                        <div className="slider-block__slide slider-block__flex-box-for-slide" id="slide-3">
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/736x/6d/10/6c/6d106ca3bdc9cb49a51a8d93378353d8--summertime-movie-happy-movie.jpg'} rating={'4.5'} FilmName={"The way way back"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/736x/6d/10/6c/6d106ca3bdc9cb49a51a8d93378353d8--summertime-movie-happy-movie.jpg'} rating={'4.5'} FilmName={"The way way back"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/736x/6d/10/6c/6d106ca3bdc9cb49a51a8d93378353d8--summertime-movie-happy-movie.jpg'} rating={'4.5'} FilmName={"The way way back"} Genres={'Триллер, драма, криминал'} />
                          <FilmCard1 LinkToImage={'https://i.pinimg.com/736x/6d/10/6c/6d106ca3bdc9cb49a51a8d93378353d8--summertime-movie-happy-movie.jpg'} rating={'4.5'} FilmName={"The way way back"} Genres={'Триллер, драма, криминал'} />
                          
                        </div>
                      </div>
                      <nav className="slider-block__nav">
                        <Link to="#slide-1" id='previous-in-slider' className="slider-block__link  link"> </Link>
                        <Link to='#slide-2' id='next-in-slider'  className="slider-block__link link"></Link>
                        
                        
                      </nav>
                    </div>
                  </div>

                </div>
                <div id='tabs__item-a3' className="tabs__item"> 3 </div>
                <div id='tabs__item-a4' className="tabs__item"> 4 </div>
                <div id='tabs__item-a5' className="tabs__item"> 5 </div>
                <div id='tabs__item-a6' className="tabs__item"> 6 </div>
                <div id='tabs__item-a7' className="tabs__item"> 7 </div>

              </div>

            </div>

        </div>
      </div>
      <img style={{
        filter: 'invert(46%) sepia(26%) saturate(6783%) hue-rotate(165deg) brightness(101%) contrast(101%)'

      }} src={like} alt="" />


    </>
  )
}

export default FirstPage