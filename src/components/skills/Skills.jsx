import './skills.css';
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse"
        }
      });

      tl.from(".head",{
        y:-20,
        opacity:0,
        duration:1
      })

      tl.from(".sub-titles", {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.3
      });

      gsap.utils.toArray(".logo img").forEach((img, i) => {
        gsap.to(img, {
          y: -10, // alternate up/down
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "power1.inOut"
        });
      });
    }, skillsRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className='skills-section' id='skills' ref={skillsRef}>
      <h1 className='head'>Skills</h1>
      <div className="language">
        <p className='sub-titles'>Programming Languages</p>
        <div className="logo">
          <img src="/java.svg" alt="Java" />
          <img src="/javascript.svg" alt="JavaScript" />
          <img src="/cprogramming.svg" alt="C" />
        </div>
      </div>

      <div className="techi">
        <p className='sub-titles'>Technologies</p>
        <div className="logo">
          <img src="/html.svg" alt="HTML" />
          <img src="/css.svg" alt="CSS" />
          <img src="/react.svg" alt="React" />
          <img src="/bootstrap.svg" alt="Bootstrap" />
          <img src="/tailwind.svg" alt="Tailwind" />
          <img src="/saas.svg" alt="Sass" />
          <img src="/nodejs.svg" alt="Node.js" />
          <img src="/expressjs.svg" alt="Express" />
          <img src="/mysql.svg" alt="MySQL" />
          <img src="/mongodb.svg" alt="MongoDB" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
