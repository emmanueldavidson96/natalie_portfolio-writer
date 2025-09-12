import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import About from '../pages/About';
import Services from '../components/Services'
import "./Home.css";


export default function Home() {
  return (
    <div className='home'>
        <Banner />
        <About />
        <Services />
    </div>
  )
}
