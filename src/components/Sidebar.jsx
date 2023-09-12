import React from 'react'
import tv from '../assets/tv.png'
import logo from '../assets/Logo1.png'
import '../style/sidebar.css'
import {GrHomeRounded} from 'react-icons/gr'
import {BiCameraMovie, BiSlideshow} from 'react-icons/bi'
import {SlCalender} from 'react-icons/sl'
import {GrLogout} from 'react-icons/gr'
const Sidebar = () => {
  return (
    <div>
        <section className='sidebar'>
            <div className='text-center img mt-3 my-md-2 my-lg-4'>
              <img src={tv} alt="" />
              <p>MovieBox</p>
            </div>
            <div className="desk"><img src={logo} alt="" /></div>
            <div className='text-center my-md-2 my-lg-4'>
              <p> <GrHomeRounded/> Home</p>
            </div>

            <div className='text-center movie my-md-2 my-lg-4'>
              <p>  <BiCameraMovie/> Movies</p>
            </div>

            <div className='text-center my-md-2 my-lg-4'>
              <p> <BiSlideshow/>  TV Series</p>
            </div>

            <div className='text-center my-md-2 my-lg-4'>
              <p> <SlCalender/> Upcoming</p>
            </div>

            <div className='play text-center my-md-2 my-lg-4'>
              <p className='pt-3'>Play movie quizes and earn free tickets</p>
              <p>50k people are playing now</p>
              <button className='start mb-3'>Start playing</button>
            </div>

            <div className='text-center my-md-2 my-lg-4'>
              <p> <GrLogout/> Log out</p>
            </div>
        </section>
    </div>
  )
}

export default Sidebar