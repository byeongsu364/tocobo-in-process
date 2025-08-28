import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Util from './Util'
import { headerData } from '../util/header'
import "../styles/components/header.scss"

const Header = () => {
  const headerLogo = headerData.logo
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="inner">
          <Nav />
          <h1 className="tit">
            <a href={headerLogo.href}>
              <img src={headerLogo.src} alt={headerLogo.alt} />
            </a>
          </h1>
          <Util />
        </div>
      </header>
    </div>
  )
}

export default Header
