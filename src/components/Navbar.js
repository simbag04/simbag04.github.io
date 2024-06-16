import React, { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const Navbar = () => {
  const [active, setActive] = useState('home')
  const nav = useNavigate();

  const clickHandler = (e) => {
    setActive(e.target.id)
    if (e.target.id === "home") {
      nav('/')
    } else {
      nav('/' + e.target.id)
    }
  }

  const titleClickHandler = () => {
    setActive("home")
    nav('/');
  }

  return (
    <>
      <div className="navbar">

        <h4 onClick={titleClickHandler} className="title">Simran Bagaria</h4>
        <ul>
          <li onClick={clickHandler} className={active === 'home' ? 'active' : ''} id="home">Home</li>
          <li onClick={clickHandler} className={active === 'projects' ? 'active' : ''} id="projects">Projects</li>
          <li onClick={clickHandler} className={active === 'resume' ? 'active' : ''} id="resume">Resume</li>
        </ul>
      </div>

      <Outlet />
    </>
  )
}