import React,{useRef,useEffect} from 'react'
import './about.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl=gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      }
    });
    tl.from(aboutRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      clearProps: 'all'
    })
    .from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      clearProps: 'all'
    })
    .from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      clearProps: 'all'
    });
  }, []);
  return (
    <div className="about" id='about'>
    <div ref={aboutRef} className='about-section'>
      <h1 ref={headingRef}>About Me</h1>
      <div className="content"  ref={contentRef}>
        <p>Hi! I'm Sameena Akthar. I'm an aspiring Web Developer with a strong passion for crafting engaging user interfaces and building responsive web applications. I love designing modern, animated frontends and turning ideas into functional digital experiences. Driven by curiosity and a problem-solving mindset, I constantly seek opportunities to learn and stay up to date with emerging technologies. My goal is to create meaningful solutions that blend good design with solid development.</p>
      </div>
    </div>
    </div>
  )
}

export default About