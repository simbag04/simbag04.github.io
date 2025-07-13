import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import menu from "../public/menu.svg"; // Make sure the image is in /public/artifacts
import MenuBar from "./MenuBar";

export const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Set active tab based on current path
    const path = router.pathname === "/" ? "home" : router.pathname.slice(1);
    setActive(path);
  }, [router.pathname]);

  const clickHandler = (id) => {
    setActive(id);
    setShowMenu(false); // Optional: close menu on click
  };

  const toggleMenuBar = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <h1 onClick={() => clickHandler("home")} className="title">
            <Link href="/">Simran Bagaria</Link>
          </h1>
          <ul>
            <li
              className={active === "home" ? "active" : ""}
              onClick={() => clickHandler("home")}
            >
              <Link href="/" id="home">Home</Link>
            </li>
            <li
              className={active === "projects" ? "active" : ""}
              onClick={() => clickHandler("projects")}
            >
              <Link href="/projects" id="projects">Projects</Link>
            </li>
            <li
              className={active === "resume" ? "active" : ""}
              onClick={() => clickHandler("resume")}
            >
              <Link href="/resume" id="resume">Resume</Link>
            </li>
          </ul>
          <Image
            src={menu}
            alt="menu"
            onClick={toggleMenuBar}
            className="menu-icon"
          />
        </div>
      </div>
      <MenuBar active={active} clickHandler={clickHandler} show={showMenu} />
    </>
  );
};
