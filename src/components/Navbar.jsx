import React from 'react'
import "./../styles/Navbar.css"
import A from "/assets/A.png"
const Navbar = () => {
  return (
    <>
     <nav>
        <div className="left">
          <img src={A} alt="A-logo" />
          <span>Abubakri's Portfolio</span>
        </div>
        <div className="right">
          <a href="#home">Header</a>
          <a href="#projects">Recent Projects</a>
          <a href="#education">Education</a>
          <a href="#myskills">My Skills</a>
          <a href="#social">Social Accounts</a>
          <a href="#mailer">Mailer</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar