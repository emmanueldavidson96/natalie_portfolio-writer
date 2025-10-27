import React from "react";
import { FaStarOfDavid } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";
import { FaFeather } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa";
import { SiStarlingbank } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import ceoImage from "../../assets/istockphoto-1500285927-612x612.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="Testimonials-area">
      {/* Header Section */}
      <div className="Testimonial-header">
        <h3 className="Testimonials-tag">
          <FaStarOfDavid size={18} color="#7CFC00" /> MY TESTIMONIALS
        </h3>

        <h2>
          CLIENT LOVED <span className="highlight">TESTIMONIALS</span>
        </h2>
      </div>

      {/* Main Testimonial Box */}
      <div className="testimonial-box">
        {/* Logo Row */}
        <div className="nav-area">
          <div className="nav-logo">
            <FaBolt size={18} color="white" />
            <h4>Boltshift</h4>
          </div>
          <div className="nav-logo">
            <FaCube size={18} color="white" />
            <h4>Lightbox</h4>
          </div>
          <div className="nav-logo">
            <FaFeather size={18} color="white" />
            <h4>FeatherDev</h4>
          </div>
          <div className="nav-logo">
            <FaCircleNotch size={18} color="white" />
            <h4>Spherule</h4>
          </div>
          <div className="nav-logo">
            <SiStarlingbank size={18} color="white" />
            <h4>GlobalBank</h4>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="testimonial-content">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#7CFC00" />
            ))}
          </div>

          <p className="testimonial-texts">
            "Working with FeatherDev was an absolute pleasure! Their keen eye
            for detail and user-centric approach truly elevated our project.
            From concept to execution, they guided us seamlessly through the
            design & development process, delivering results that exceeded our
            design."
          </p>

          {/* CEO Section */}
          <div className="ceo-section">
            <img
              src={ceoImage}
              alt="Oliver Grioud"
              className="ceo-img"
            />

        
          </div>

         
          <h4>Oliver Grioud / CEO, Lava Ltd</h4>
        
          <a href="#" className="testimonial-link">
            Read More Testimonials Feedback
          </a>

          <div className="arrows">
            <FaArrowLeft size={20} color="greenyellow" />
            <FaArrowRight size={20} color="greenyellow" />
          </div>
        </div>
      </div>
    </div>
  );
}
