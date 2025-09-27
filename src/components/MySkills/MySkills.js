import React from 'react'
import SkillCard from './SkillCard'
import "./MySkills.css";
import writingImg from "../../assets/icons8-writing-100.png";
import copyImg from "../../assets/icons8-copy-100.png";
import sketchImg from "../../assets/lovepik-hand-drawn-teachers-teacher-writing-elements-png-image_401950441_wh1200-removebg-preview.png"

export default function MySkills() {
  return (
    <div className='' 
        style={{            
            overflow:"hidden",
            height:"fit-content",
            display:"flex",
            backgroundColor:"#000",
            alignItems:"center",
            justifyContent:"center",
            width:"100%",
            padding:"5% 0px"
        }}>
            <div className='section'>
                <div className='skillz_section'>
                    
                    <div className='skillz_top'>
                        <div className='first_card'>
                            <SkillCard percentage={96} skill={"Writing"} skillImg={writingImg}/>
                        </div>
                        <div className='second_card'>
                            <SkillCard percentage={99} skill={"Sketching"} skillImg={sketchImg}/>
                        </div>
                    </div>
                    
                    <div className='skillz_mid'>
                        <SkillCard percentage={96} skill={"Copywriting"} skillImg={copyImg}/>
                    </div>

                    <div className='skillz_bottom'>
                        <div className='first_card'>
                            <SkillCard percentage={70} skill={"Writing"} skillImg={writingImg}/>
                        </div>
                        <div className='second_card'>
                            <SkillCard percentage={100} skill={"Sketching"} skillImg={sketchImg}/>
                        </div>
                    </div>

                </div>

                <div className='skillz_text'>
                    <h3 style={{
                        color:"#adff2f",
                        textTransform:"uppercase",
                        fontSize:"24px"
                    }}>My Skills</h3>
                    <h2 style={{
                        color:"white",
                        fontSize:"50px",
                        textTransform:"uppercase"
                    }}>Let's Explore Popular Skills and <em>Experience</em></h2>
                    <p style={{
                        color:"white",
                        lineHeight:"2em"
                    }}>Natalie, I offer comprehensive Writing and Copywriting services aimed at creating
                        exceptional digital and physical experiences that seamlessly leaves the reader excited and informed.
                    </p>
                    <button style={{
                        width:"fit-content",
                        padding:"20px",
                        borderRadius:"10px",
                        fontWeight:"700",
                        fontSize:"16px",
                        backgroundColor:"#adff2f"                        
                    }}>Get in touch Now</button>
                </div>
            </div>
    </div>
  )
}
