import React from 'react'
import FilmIcon from './assets/images/film_icon.png'
const Header = () => {
  return (
    <>
        <header className="header">
            <div className="header_top">
                <img src={FilmIcon} alt="" className="header_top_img" />
                <p className="header_top_text">See no special offer restrictions</p>
            </div>
        </header>
    </>      
  )
}

export default Header
