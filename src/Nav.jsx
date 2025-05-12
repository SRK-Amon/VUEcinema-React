import React from 'react'
import Logo from './assets/images/logo.svg'
import menu from './assets/images/menu.png'
import close from './assets/images/close.png'
const Nav = () => {
  return (
      <>
        <nav className="nav">
          <div className="container">
            <div className="nav_box">
              <a href="#!" className="nav_logo">
                <img src={Logo} alt="" />
                <span>CINEMAS</span>
              </a>
              <label for="check" className='menu'>
                <img src={menu} alt="" />
              </label>
              <input type="checkbox" id='check' />
              <ul className="nav_list">
              <label for="check" className='close'>
                <img src={close} alt="" />
              </label>
                <li><a href="#!" className="nav_link"><span>Films</span></a></li>
                <li><a href="#!" className="nav_link"><span>Serials</span></a></li>
                <li><a href="#!" className="nav_link"><span>Cartoons</span></a></li>
                <li><a href="#!" className="nav_link"><span>Collections</span></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  )
}

export default Nav
