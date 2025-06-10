import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className="parallax-wrap" id='home'>
      <div className='entry-page'>
      <div className="conte">
        <p className='main-c'>Welcome to my Space</p>
        <p className='main2-c'>I'm Sameena Akthar</p>
      </div>
      <div className='content-2'>
        <span className='dev-ani'></span>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/sameena-akthar-m-3239a0317/" target="_blank" rel="noopener noreferrer">
        <img src="linkedin.svg" alt="" />
        </a>
        <a href="https://github.com/SameenaAkthar-M"
        target="_blank" rel="noopener noreferrer">
          <img src="github.svg" alt="" />
        </a>
      </div>
      <div className="btn">
        <button><a href="/resume.pdf" download="SameenaM-Resume.pdf">Download Resume</a></button>
      </div>
      <div className="scroll-btn">
        <button className='scrolling'><div className="roun"></div></button>
        <p className='scro'>Scroll Down</p>
      </div>
    </div>
    </div>
  )
}

export default Home