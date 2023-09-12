import React from 'react'
import imbd from '../assets/imbd.png'
import app from '../assets/apple.png'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import Header from './Header'

const Hero = () => {
  return (
    <div className='hero text-white  px-2 '>
       <Header/>
    <div className='her'>
     
    <div className='text pt-lg-'>
        <h1>John Wick 3 : Parabellum</h1>
        <div className="ico d-fle ">
       <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-4' /> 97% </p>  
        </div>
        <p>John Wick is on the run after killing a member of the international 
          assassins' guild, and with a $14 million price
           tag on his head, he is the target of hit men and women everywhere.
        </p>

        <button className='b bt text-white'> <AiOutlinePlayCircle className='mx-1 fs-4'/> Watch trailer </button>

    </div>
    </div>
    </div>
  )
}

export default Hero