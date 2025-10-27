import React from 'react'
import Nav from '../components/Nav'
import Banner from "../components/Banner/Banner"
import Services from '../components/Services/Services'
import "./Home.css";
import AboutMe from '../components/AboutMe/AboutMe';
import MySkills from '../components/MySkills/MySkills';
import MyProjects from '../components/Myprojects/MyProjects';
import Testimonials from '../components/Testimonials/Testimonials';
import ContactForm from '../components/ContactForm/ContactForm';
import NewsLetter from '../components/NewsLetter';


export default function Home() {
  return (
    <div className='home'>
        <Banner />        
        <AboutMe />
        <Services />
        <MySkills />
        <MyProjects/>
        <Testimonials/>
        <ContactForm />
        <NewsLetter />
    </div>
  )
}
