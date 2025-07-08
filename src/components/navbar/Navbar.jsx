import React from 'react';
import './navbar.css';
import gsap from 'gsap'
import { useState, useEffect,useRef } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    gsap.fromTo(
      navItemsRef.current,
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      }
    );

    gsap.fromTo(
      '.active',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: 'power2.out',
      }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <ul className='nav-items'>
        {['home', 'about', 'skills', 'projects', 'contact'].map((item,index) => (
          <li
            key={item}
            className={activeSection === item ? 'active' : ''}
            ref={(el) => (navItemsRef.current[index] = el)}
            onClick={() => scrollToSection(item)} // <-- this makes it work
            style={{ cursor: 'pointer' }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar