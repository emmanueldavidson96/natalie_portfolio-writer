import React from "react";
import "./Myprojects.css";
import { FaStarOfDavid } from "react-icons/fa";
import Myproject1 from "../../assets/thought-catalog-505eectW54k-unsplash.jpg"
import Myproject2 from "../../assets/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg"
import Myproject3 from "../../assets/alexis-brown-omeaHbEFlN4-unsplash.jpg"
import Myproject4 from "../../assets/marcos-paulo-prado-tcyW6Im5Uug-unsplash.jpg"
import Myproject5 from "../../assets/hannah-olinger-NXiIVnzBwZ8-unsplash.jpg"

export default function MyProjects () {

    return (

        <div className="project-area">
 
            <div className="project-header">
                <h3 className="project-tag">
                    <><FaStarOfDavid  size={18} color="#7CFC00"/> </> MY PROJECTS FEATURES</h3>
                    <h2>
                        OUR FEATURES<span className="highlight">PROJECTS</span>
                    </h2>

            </div>

            <div className="img-container1">

                <img 
                src={Myproject1}  
                alt=" "
                className="first-img"
                />

                <img  
                src={Myproject2}
                alt=""
                className="second-img"
                />

                <img
                src={Myproject3}
                alt=" "
                className="third-img"
                />
             </div>


             <div className="img-container2">

                <img
                src={Myproject4}
                alt=" "
                className="fourth-img"
                />

                <img
                src={Myproject5}
                alt= " "
                className=" fifth-img"
                />
                
             </div>


             <button className="project-btn">
                VIEW MORE PROJECT
             </button>
        </div>
    )
}