import React from "react"
import "./AboutMe.css";
import { IoFlowerSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

export default function AboutMe() {
    return (
      <section className='about-section'>
        <div className='about-left'>
          <h4 className='about-tag'> <IoFlowerSharp className="" color="#adff2f" size={25}/>  ABOUT ME</h4>
          <h2 className='about-title'>
          BEST YOUNG WRITER <br />  <span> & COPY WRITER</span> IN NIGERIA 
          </h2>
          <p className='about-text'>
          Writing, for me, is more than just putting words on a page. It's about understanding people, shaping ideas, and turning thoughts into powerful messages that leave a lasting impression.
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
              <h3 style={{fontSize:"50px", fontWeight:700}}>12K</h3>
              <p>All Project Completed</p>
            </div>
            <div className="stat-card2">
              <h3 style={{fontSize:"50px", fontWeight:700}}>10K</h3>
              <p>Satisfied Customer</p>
            </div>
          </div>

          <div className="about-right-top">
            <div className="stat-card2">
              <h3 style={{fontSize:"50px", fontWeight:700}}>10K</h3>
              <p>Satisfied Customer</p>
            </div>
            <div className="stat-card1">
              <h3 style={{fontSize:"50px", fontWeight:700}}>12K</h3>
              <p>All Project Completed</p>
            </div>
          </div>
          
          

        </div>
        </section>
        
        
      
    )
  }
  


        