import { useLayoutEffect, useState } from "react"
import { useRouter } from "next/router"

const MenuBar = (props) => {
    const router = useRouter()
    const clickHandler = (e) => {
        let menubar = document.querySelector(".menu-bar")
        menubar.classList.remove('show-menu-bar')
        router.push(`/${e.target.id === "home" ? "" : e.target.id}`)
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