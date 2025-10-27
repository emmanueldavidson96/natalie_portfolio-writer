import React from "react";
import { FaStarOfDavid } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import "./NewsLetter.css";

export default function  NewsLetter () {

    return (


        <div className="News-area">

            <div className="News-header">

            <h3 className="News-tag"><><FaStarOfDavid size={18} color="#7CFC00"/></> SUBSCRIBE NEWSLETTER</h3>

            <h2>
                STAY UP TO DATE WITH NATALIE <span className="highlight"> NEWSLETTER</span>
            </h2>

            </div>

            <div className="Subscribe-box">
        <input type="email" placeholder="Email Address*" className="Subscribe-input" required />
        <button className="Subscribe-btn">SUBSCRIBE NOW</button>
         </div>

         <div className="Social-links">
        <div className="Social-card"><FaFacebookF /> FACEBOOK</div>
        <div className="Social-card"><FaInstagram /> INSTAGRAM</div>
        <div className="Social-card"><FaXTwitter /> TWITTER</div>
        <div className="Social-card"><FaLinkedinIn /> LINKEDIN</div>
        <div className="Social-card"><FaDribbble /> DRIBBBLE</div>
      </div>

      <div className="Footer-text">
          © 2024 <a href="https://yourwebsite.com" target="_blank" rel="noreferrer">Personal Portfolio</a>. All Rights Reserved.
     </div>

        </div>
    );
}