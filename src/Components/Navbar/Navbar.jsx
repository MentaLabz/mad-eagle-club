/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import Logo from '../../Assets/Images/logo001..png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {


  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("navbar-ul_visible")
  }

  return (
    <div className="navbar-div1">
      <div className="navbar-div2">
        <div className="navbar-div3">
          <div className="navbar-div4">
            <div className="navbar-div5">
              <img src={Logo} alt="Logo" className="navbar-img" />
              <h1 className="navbar-h">MEC</h1>
            </div>

            <div ref={navRef} className="navbar-div8">
              <ul className="navbar-ul">
                <li className="navbar-li"><a href="/" className="navbar-a">Home</a><span></span></li>
                <li className="navbar-li"><a href="/" className="navbar-a">NFTs</a><span></span></li>
                <li className="navbar-li"><a href="/" className="navbar-a">Roadmap</a><span></span></li>
                <li className="navbar-li"><a className="navbar-a">Merch</a><span></span></li>
                <li className="navbar-li"><a href="/" className="navbar-a">Partners</a><span></span></li>
                <li className="navbar-li"><a href="/" className="navbar-a">Blog</a><span></span></li>
              </ul>
            </div>
              <FontAwesomeIcon onClick={showNavbar} className='icon-navbar' icon={faBars} />
            <div className="navbar-div6">
              <a target="_blank" rel='noopener noreferrer' href="https://t.me/mentalabz" className="community-link"><FontAwesomeIcon icon={faTelegram} className="navbar-icon" /></a>
              <a target="_blank" rel='noopener noreferrer' href="https://twitter.com/MadEagleClub" className="community-link"><FontAwesomeIcon icon={faTwitter} className="navbar-icon" /></a>
              <a target="_blank" rel='noopener noreferrer' href="https://discord.gg/5vU3T5F7CH" className="community-link"><FontAwesomeIcon icon={faDiscord} className="navbar-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
