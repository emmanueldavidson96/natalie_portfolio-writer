import React from "react"
import "./Services.css";
import { SiLibreofficewriter } from "react-icons/si";
import { FaCopy } from "react-icons/fa";


export default function Services() {
  return (
    <div className="services-area">
    
      <div className="service-header">
        <h4>🌟 MY SERVICE PROVIDE</h4>
        <h3>
          MY BEST QUALITY <span className="highlight">SERVICE</span>
        </h3>
      </div>

      {/* <div className="arrange-card">
        <div className="service-card">
          <h4>WRITING</h4>
          <p>
            Writing design is the cornerstone of creating exceptional digital
            experiences that blend aesthetics with functionality.
          </p>
          <button className="btn">Read More</button>
        </div>

        <div className="service-card">
          <h4>FRONT-END DEVELOPMENT</h4>
          <p>
            Bringing designs to life with interactive digital experiences,
            leveraging the latest web technologies.
          </p>
          <button className="btn">Read More</button>
        </div>

        <div className="service-card">
          <h4>CMS DEVELOPMENT</h4>
          <p>
            Crafting bespoke CMS solutions tailored to meet your unique business
            needs and goals.
          </p>
          <button className="btn">Read More</button>
        </div>

        <div className="service-card">
          <h4>WP DEVELOPMENT</h4>
          <p>
            Expert WordPress development to deliver scalable, flexible, and
            user-friendly websites.
          </p>
          <button className="btn">Read More</button>
        </div>

        <div className="service-card">
          <h4>PHP DEVELOPMENT</h4>
          <p>
            Powerful backend development using PHP to ensure stability,
            security, and performance.
          </p>
          <button className="btn">Read More</button>
        </div>

        <div className="service-card">
          <h4>BRANDING IDENTITY</h4>
          <p>
            Building strong brand identities that shape perceptions and foster
            lasting connections.
          </p>
          <button className="btn">Read More</button>
        </div>

        <div className="service-card">
          <h4>LOGO DESIGN</h4>
          <p>
            Crafting logos that reflect your brand's essence, values, and
            connect with your audience.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div> */}
      
      {/* create services  */}
      <div className="natalie_services">        
        
        {/* first services section - Writer and Copy writer 40% and 60% */}
        <div className="first-services-section">          
          
          {/* Writer  */}
          <div className="writer_design">
            <div className="icon-container">
              <SiLibreofficewriter size={25} color="#7CFC00"/>
            </div>
            <h3>Content Writing</h3>
            <p>
              I create well-researched, engaging, and SEO-friendly content 
              tailored to your audience. From blog posts and web copy to newsletters, 
              I ensure your message is clear, valuable, and drives results.
            </p>
            <button>Read More</button>
          </div>
          
          {/* Copy Writer */}
          <div className="copy_writer">
            <div className="icon-container">
              <FaCopy size={25} color="#7CFC00"/>
            </div>
            <h3>Copywriting</h3>
            <p>
              I craft persuasive copy that sells — whether it’s for websites, ads, sales pages, 
              or email campaigns. My words are designed to capture 
              attention, spark emotion, and inspire action.
            </p>
            <button>Read More</button>
          </div>
        </div>

        {/* second services section - CMS Dev., WP Dev., and PHP dev. 30% 30% 30% */}
        {/* third services section - branding identity and logo design 45% 45% */}

      </div>
    </div>
  );
}
