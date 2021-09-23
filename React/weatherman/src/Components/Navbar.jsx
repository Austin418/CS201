import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { links } from '../util/const'
import { FaBars } from 'react-icons/fa'
import { GrClose } from "react-icons/gr";


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  

  const checkSize = () => {
    if (window.innerWidth >= 768) {
      setShowLinks(true)
    }
    if (window.innerWidth < 768) {
      setShowLinks(false)
    }
  }
  useEffect(() => {
    checkSize()
    window.addEventListener("resize", checkSize)
  }, [])
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav-header">
          <h2><strong >W</strong>eather<strong>M</strong>an</h2>
          <img src={'../media/WeatherLOGO.png'} alt="Logo" className='logo' />
          <button className="nav-toggle" onClick={toggleLinks}>
            {!showLinks ? <img src={'../media/windburgerblack.png'} alt="Logo" className='burger' /> : <GrClose/>}
          </button>
        </div>
        <div className={`links-container ${showLinks && "show"}`}>
          <ul className="links">
            {links
              // .filter((link) => link.text !== 'Error')
              .map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <Link to={url}>
                      {text}
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
