import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App