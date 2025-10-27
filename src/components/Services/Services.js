import React from "react"
import "./Services.css";
import { SiLibreofficewriter } from "react-icons/si";
import { FaCopy } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { SiWebflow } from "react-icons/si";
import { TbFileTypePhp } from "react-icons/tb";
import { ImPriceTags } from "react-icons/im";
import { IoLogoBuffer } from "react-icons/io5";
import { FaStarOfDavid } from "react-icons/fa";




export default function Services() {
  return (
    <div className="services-area">
    
      <div className="service-header">
        
        <h3 className="service-tag">
          <><FaStarOfDavid  size={18} color="#7CFC00"/> </> MY SERVICE PROVIDE</h3>
        <h2>
          MY BEST QUALITY <span className="highlight">SERVICES</span>
        </h2>
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

      

        {/* second services section - CMS Dev., WP Dev., and PHP Dev. 30% 30% 30% */}
        
        <div className="second-service-section">
          
          {/* CMS Dev */}
          
          <div className="cms_dev">
            <div className="icon-container">
              <RiSpeakFill size={25} color="#7CFC00"/>
              </div>
              <h3>CMS DEVELOPMENT</h3>
              <p>
              CMS (Content Management System) development is the process of building,
              customizing, or extending platforms that allow users to create,
              manage, and modify digital content.
              </p>
              <button>Read More</button>
              
        </div>
            {/* WP Dev */}
            <div className="wp-dev">
              <div className="icon-container">
                <SiWebflow size={25} color="#7CFC00"/>
                </div>
                
                <h3>WP DEVELOPMENT</h3>
                <p>
               WordPress Development is the process of building and customizing websites 
                using the WordPress platform. It allows developers to create tailored 
                themes, plugins, and features that meet unique business needs. 
                </p>
             <button>Read More</button>
        </div>

        {/* PHP Dev */}
        <div className="php-dev">
          <div className="icon-container">
            <TbFileTypePhp size={25} color="#7CFC00"/>
            </div>
          <h3>PHP DEVELOPMENT</h3>
          <p>
           PHP Development is the process of building dynamic and interactive 
           websites or web applications using PHP — a widely used 
           server-side scripting language.
          </p>
          <button>Read More</button>
      </div>

</div>  

        {/* third services section - branding identity and logo design 45% 45% */}

        <div className="Third_service_section"> 
          <div className="Brand_id"> 
            <div className="icon-container"> 
              <ImPriceTags size={25} color="#7CFC00"/> 
              </div> 
              <h3>BRANDING IDENTITY</h3>
               <p> Branding Identity is about shaping how your audience perceives your brand. 
                It combines visuals, tone, and strategy to create a consistent image that builds trust and 
                emotional connection with customers. </p> 
                <button>Read More</button>
                 </div>

                  <div className="Logo_design"> 
                    <div className="icon-container"> 
                      <IoLogoBuffer size={25} color="#7CFC00"/>
                  </div>

                  <h3>LOGO DESIGN</h3>
                  <p>
                  I design unique, memorable logos that express your brand’s
                 personality and leave a lasting impression on your audience.A great logo is simple, memorable, and versatile — 
                 it communicates who you are at a glance and builds instant recognition.
                 </p>
                 <button>Read More</button>
                 </div>
               </div>
             </div>
           </div>


);


}
