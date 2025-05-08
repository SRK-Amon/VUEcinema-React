import React from 'react'
import Logo from './assets/images/logo.svg'
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
              <ul className="nav_list">
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
