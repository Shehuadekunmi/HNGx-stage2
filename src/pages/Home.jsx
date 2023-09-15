import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import '../style/home.css'

import Loading from '../components/Loading';
import { Link } from 'react-router-dom'
import Carddetails from '../components/Carddetails';
const Home = () => {

  return (
    <div>
      <Hero />

      
      <Carddetails/>


      <h1>HELLO ooo</h1>
     

      <Footer />
    </div>
  )
}

export default Home