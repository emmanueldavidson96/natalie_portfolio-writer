import React from "react"
import { FaStarOfDavid } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./AboutMe.css";



export default function AboutMe() {
    return (
      <section className='about-section'>
        <div className='about-left'>
        <h4 className='about-tag'>
          <FaStarOfDavid size={18} color="#7CFC00" /> ABOUT ME
          </h4>

    <h2 className='about-title'>
      BEST YOUNG WRITER <br /> <span className="highlight">& DEVELOPER</span> IN NIGERIA
    </h2>

    <p className='about-text'>
      Writing, for me, is more than just putting words on a page. It's about understanding people, 
      shaping ideas, and turning thoughts into powerful messages that leave a lasting impression.
    </p>

    <ul className="skills">
      <li><FaCheck color="#adff2f" size={20}/> LOVE STORIES</li>
      <li><FaCheck color="#adff2f" size={20}/> PRODUCT BRANDING</li>
      <li><FaCheck color="#adff2f" size={20}/> COPY WRITING</li>
      <li><FaCheck color="#adff2f" size={20}/> FICTION WRITING</li>
    </ul>

          <button className="cta-btn">GET IN TOUCH NOW</button>
        </div>

        <div className="about-right">
  
        <div className="about-right-top">
          <div className="stat-card1">
            <h2>12K</h2>
            <p>All Project Completed</p>
          </div>
          <div className="stat-card2">
            <h2>10K</h2>
            <p>Satisfied Customer</p>
          </div>
          </div>
          
          
          <div className="about-right-bottom">
          <div className="stat-card3">
            <h2>10K</h2>
            <p>Satisfied Customer</p>
          </div>
          <div className="stat-card4">
            <h2>12K</h2>
            <p>All Project Completed</p>
          </div>
        </div>
        </div>
    
        </section>
        
        
      
    )
  }
  


        