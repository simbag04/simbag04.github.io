import { useLayoutEffect, useState } from "react"

const MenuBar = (props) => {
    const clickHandler = (e) => {
        let menubar = document.querySelector(".menu-bar")
        menubar.classList.remove('show-menu-bar')
        props.clickHandler(e)
    }

    const [top, setTop] = useState(0);

    useLayoutEffect(() => {
      const navbar = document.querySelector('.navbar');
      setTop(navbar.offsetHeight)
      console.log(navbar.offsetHeight)
    }, [])

    return (
        <div className="menu-bar" style={{top: `${top - 10}px`}}>
            <div id="home"
                 className={props.active === "home" ? "active" : ""}
                 onClick={clickHandler}>
                    Home
            </div>
            <div id="projects"
                 className={props.active === "projects" ? "active" : ""}
                 onClick={clickHandler}>
                    Projects
            </div>
            <div id="resume"
                 className={props.active === "resume" ? "active" : ""}
                 onClick={clickHandler}>
                    Resume
            </div>
        </div>
    )
}

export default MenuBar