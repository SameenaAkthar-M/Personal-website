import React, { useLayoutEffect, useRef } from 'react';
import './projects.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useLayoutEffect(() => {
    gsap.from(".heading", {
      y: -20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".heading",
        start: "top 70%",
        end: "top 20%",
        scrub: true,
      },
    });

    gsap.from(".card", {
      y: 10,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  }, []);
  return (
    <div className='projects-section' id='projects'>
      <h1 className="heading">Projects</h1>
      <div className="project">
        <div className="pro">
        <div className="card">
            <div className="con">
              <img src="/bd.png" alt="Blood Donation" className="card-image" />
              <p className="card-title">Blood Donation Management System</p>
            </div>
            <div className="card-content">
              <p>A platform that connects blood donors, admins, and hospitals.</p>
              <a href="https://red-pulse-donation.netlify.app/" target="_blank" rel="noopener noreferrer">Take a look</a>
            </div>
          </div>
          <div className="card">
            <div className="con">
              <img src="/flower.png" alt="Flower" className="card-image" />
              <p className="card-title">Flower Shop</p>
            </div>
            <div className="card-content">
              <p>A delightful platform to discover fresh flowers and send heartfelt gifts to loved ones.</p>
              <a href="https://sa-flowers-shop.netlify.app/" target="_blank" rel="noopener noreferrer">Take a look</a>
            </div>
          </div>
          <div className="card">
            <div className="con">
              <img src="/food.png" alt="Food" className="card-image" />
              <p className="card-title">Food Ordering Website</p>
            </div>
            <div className="card-content">
              <p>A convenient platform to explore and order delicious meals from a restaurant.</p>
              <a href="https://chow-time.netlify.app/" target="_blank" rel="noopener noreferrer">Take a look</a>
            </div>
          </div>
          <div className="card">
            <div className="con">
              <img src="/travel.png" alt="Travel Website" className="card-image" />
              <p className="card-title">Travelling Website</p>
            </div>
            <div className="card-content">
              <p>Perfect platform to discover destinations, plan trips for an unforgettable journey.</p>
              <a href="https://ttraveller.netlify.app/" target="_blank" rel="noopener noreferrer">Take a look</a>
            </div>
          </div>
          <div className="card">
            <div className="con">
              <img src="/sasen.png" alt="Sasen" className="card-image" />
              <p className="card-title">Consultancy Project</p>
            </div>
            <div className="card-content">
              <p>Developed a website for the sasen tile fixing solutions with seamless interactions.</p>
              <a href="https://sasen.netlify.app/" target="_blank" rel="noopener noreferrer">Take a look</a>
            </div>
          </div>
          <div className="card">
            <div className="con">
              <img src="/whatsapp.png" alt="Whatsapp" className="card-image" />
              <p className="card-title">Whatsapp Clone (Figma)</p>
            </div>
            <div className="card-content">
              <p>A great user Experiencing whatsapp clone.</p>
              <a href="https://www.figma.com/design/6E8nzBE5KQzKNZE1fPFUQX/Whatsapp?node-id=0-1&t=A8tMxV9rNaICy4gz-1" target="_blank" rel="noopener noreferrer">Take a look</a>
            </div>
          </div>
        <div className="card last-card">
            <div className="con">
              <img src="/traveling.png" alt="Travel" className="card-image" />
              <p className="card-title">Travel Mobile application(Figma) </p>
            </div>
            <div className="card-content">
              <p>User Friendly and Aesthetic mobile interface for seamless travel experience.</p>
              <a href="https://www.figma.com/design/VIeCLVYDoZf9F6ZsRB9Woj/Ttraveller?node-id=0-1&t=YfWXomJy1lKVrL9J-1" target="_blank" rel="noopener noreferrer">Take a look</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects