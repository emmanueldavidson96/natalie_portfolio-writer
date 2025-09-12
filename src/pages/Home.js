import React from 'react'
import Nav from '../components/Nav'
import Banner from "../components/Banner/Banner"
import Services from '../components/Services/Services'
import "./Home.css";
import AboutMe from '../components/AboutMe/AboutMe';


export default function Home() {
  return (
    <div className='home'>
        <Banner />        
        <AboutMe />
        <Services />
    </div>
  )
}
