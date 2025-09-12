import React from "react"
import "./TestimonialSection.css";


export default function About() {
    return (
      <section className='about-section'>
        <div className='about-left'>
          <h4 className='about-tag'> ABOUT ME</h4>
          <h2 className='about-title'>
          BEST YOUNG WRITER <br />  <span> & DEVELOPER</span> IN NIGERIA 
          </h2>
          <p className='about-text'>
          Writing, for me, is more than just putting words on a page. It's about understanding people, shaping ideas, and turning thoughts into powerful messages that leave a lasting impression.
          </p>
          <ul className="skills">
            <li>✔ UI/UX DESIGN</li>
            <li>✔ PRODUCT DESIGN</li>
            <li>✔ WEB DEVELOPMENT</li>
            <li>✔ BRANDING & DESIGN</li>
          </ul>
  
          <button className="cta-btn">GET IN TOUCH NOW</button>
        </div>
  
        <div className="about-right">
          <div className="stat-card">
            <h3>12K</h3>
            <p>All Project Completed</p>
          </div>
          <div className="stat-card">
            <h3>10K</h3>
            <p>Satisfied Customer</p>
          </div>
          <div className="stat-card">
            <h3>10K</h3>
            <p>Satisfied Customer</p>
          </div>
          <div className="stat-card">
            <h3>12K</h3>
            <p>All Project Completed</p>
          </div>
        </div>
        </section>
        
        
      
    )
  }
  


        