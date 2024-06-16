import React from "react"
import Simran from '../Simran.jpg'
import github from '../github.svg'
import linkedin from '../linkedin.svg'
import email from '../email.svg'

export const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="info">

          <p>
            Hi! I'm Simran Bagaria, a junior at the University of Washington in Seattle, majoring in computer science. At UW, I am part of the WEIRD Lab, led by Professor Abhishek Gupta, where I do research within robotics and reinforcement learning. I am also a SWE Intern at J.P. Morgan Chase in Seattle, WA.
          </p>
          <p>
            In my free time, I love reading, traveling, cooking, watching kdramas, listening to music, or spending time with my friends. Please feel free to reach out to me to chat about anything!
          </p>
          <ul className='contact-icons'>
            <li>
              <a href='mailto:sbagaria@uw.edu' target="_blank" rel="noreferrer">
                <img src={email} alt="email"></img>
              </a>
            </li>
            <li>
              <a href='https://github.com/simbag04' target="_blank" rel="noreferrer">
                <img src={github} alt="github"></img>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/simran-bagaria-12bb79246/' target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin"></img>
              </a>
            </li>

          </ul>
        </div>
        <img className="personal" src={Simran} alt="simran" />
      </div>
    </>
  )
}