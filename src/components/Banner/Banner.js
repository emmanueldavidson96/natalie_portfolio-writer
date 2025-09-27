import React from 'react'
import "./Banner.css"
import bannerImage from "../../assets/image-contemplative-dark-skinned-woman.png"
import womanNailsImage from "../../assets/icons8-nail-polish-96.png"
import imageStroke from "../../assets/depositphotos_232120828-stock-illustration-vector-brush-strokes-circles-paint-removebg-preview.png"
import writerImage from "../../assets/lovepik-hand-drawn-teachers-teacher-writing-elements-png-image_401950441_wh1200-removebg-preview.png"

export default function Banner() {
  return (
    <div className='banner'>
        <img 
            src={writerImage}
            alt=''
            className='writerHand'
        />
        <div className='banner_img'>
            <img 
                src={bannerImage}
                alt=''
                className='image'
            />
            <img 
                src={imageStroke}
                alt=''
                className='imageStroke'
            />
        </div>

        <div className='banner_content'>
            <h3 className='mainHeader'>
                <img 
                    src={womanNailsImage}
                    alt=''
                    className='woman-nail'
                /> 
                Hi, I am Natalie Bennet
            </h3>
            <h2 className='mainHeaderText'>I am a Fiction and <br/><span style={{marginLeft:"60px"}}>Non-Fiction Writer</span></h2>
            <p className='paragraphText'>As a dedicated content writer, I am commited to the entertainment and satisfaction of my readers and followers. I have abut 10+ 
                years experience craefting and building massive stories for audiences both abroad and at home.
            </p>
            <div className='reachNatalie'>
                <button className='contact-me'>Contact Me</button>
                <button className='read-book'>Read My Latest Book</button>
            </div>
        </div>
    </div>
  )
}
