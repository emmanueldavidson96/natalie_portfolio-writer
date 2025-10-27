import React from "react";
import "./ContactForm.css";
import { FaStarOfDavid } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailLock } from "react-icons/md";
import { GrDownload } from "react-icons/gr";

export default function ContactForm() {
  return (
    <div className="Contact-area">
      <div className="Contact-header">
        <h3 className="Contact-tag">
          <FaStarOfDavid size={18} color="#7CFC00" /> CONTACT NOW
        </h3>

        <h2>
          GET IN TOUCH <span className="highlightt">TODAY</span>
        </h2>

        <p className="Contact-form">
          I’m a passionate writer who helps brands, businesses, and individuals
          bring their ideas to life through powerful words. Whether it’s
          crafting engaging blog posts, persuasive website copy, or captivating
          social media content, I focus on creating writing that connects,
          sells, and inspires action.
        </p>

        <div className="Contact-box">
          <div className="Contact-card1">
            <div className="Contact-icon">
              <LuPhoneCall size={25} color="#7CFC00" />
            </div>
            <div className="card-text1">
              <h3>CALL</h3>
              <p>09069925133</p>
            </div>
          </div>

          <div className="Contact-card2">
            <div className="Contact-tag">
              <MdOutlineMailLock size={25} color="#7CFC00" />
            </div>
            <div className="card-text2">
              <h3>EMAIL</h3>
              <p>Adeyemosamuel205@gmail.com</p>
            </div>
          </div>
        </div>

        <button className="Contact-btn">
          <GrDownload size={20} color="#111" /> DOWNLOAD CV
        </button>
      </div>

      <div className="Message-box">
        <h3 className="Message-title">LEAVE A MESSAGE</h3>

        <form className="Message-form">
        <div className="form-row">
        <input type="text" placeholder="Full Name*" required />
        <input type="text" placeholder="Phone Number*" required />

        </div>

        <div className="form-row">
            <input type="email" placeholder="Email Address*" required />
        </div>

        <div className="form-row">
            <input type="text" placeholder="Subject*" required />
        </div>

        <div className="form-row">
            <textarea placeholder="Message" rows="5" required></textarea>
        </div>

        <button type="submit" className="Submit-btn">
            SUBMIT NOW
        </button>
        
        </form>
      </div>
    </div>
  );
}
