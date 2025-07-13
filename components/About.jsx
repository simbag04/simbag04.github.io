export const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="info">

          <p>
            Hi, I'm Simran Bagaria! I am a current Software Engineer at J.P. Morgan Chase Bank in Seattle, WA. Previously, I completed my Bachelors and Masters degrees in Computer Science at the University of Washington in Seattle. At UW, I had the pleasure of being a part of the of the <a className="link" href="https://weirdlab.cs.washington.edu/">WEIRD Lab</a>, led by Professor Abhishek Gupta, where I did research within robotics and reinforcement learning.
          </p>
          <p>
            In my free time, I love reading, traveling, cooking, hiking, or spending time with my friends. Please feel free to reach out to me to chat about anything!
          </p>
          <ul className='contact-icons'>
            <li>
              <a href='mailto:simran.bagaria@gmail.com' target="_blank" rel="noreferrer">
                <img src="email.svg" alt="email"></img>
              </a>
            </li>
            <li>
              <a href='https://github.com/simbag04' target="_blank" rel="noreferrer">
                <img src="github.svg" alt="github"></img>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/simran-bagaria-12bb79246/' target="_blank" rel="noreferrer">
                <img src="linkedin.svg" alt="linkedin"></img>
              </a>
            </li>

          </ul>
        </div>
        <img className="personal" src="Simran.jpg" alt="simran" />
      </div>
    </>
  )
}