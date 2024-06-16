import React, { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import menu from '../artifacts/menu.svg'
import MenuBar from "./MenuBar"

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

  const showMenuBar = () => {
    let menubar = document.querySelector(".menu-bar")
    console.log(menubar.classList)
    console.log(menubar.classList.contains('show-menu-bar'))
    if (menubar.classList.contains('show-menu-bar')) {
      menubar.classList.remove('show-menu-bar')
    } else {
      menubar.classList.add('show-menu-bar')
    }
  }

  return (
    <>
    <div className="nav-container">
      <div className="navbar">
        <h4 onClick={titleClickHandler} className="title">Simran Bagaria</h4>
        <ul>
          <li onClick={clickHandler} className={active === 'home' ? 'active' : ''} id="home">Home</li>
          <li onClick={clickHandler} className={active === 'projects' ? 'active' : ''} id="projects">Projects</li>
          <li onClick={clickHandler} className={active === 'resume' ? 'active' : ''} id="resume">Resume</li>
        </ul>
        <img src={menu} alt="" onClick={showMenuBar}></img>
      </div>
      </div>
      <MenuBar active={active} clickHandler={clickHandler} />

      <Outlet />
    </>
  )
}