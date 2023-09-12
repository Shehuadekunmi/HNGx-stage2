import React from 'react'
import '../style/footer.css'
import {AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
    <div className='text-center foo'> 
    <div> <AiOutlineTwitter className='mx-3 fs-1 my-2'/> 
    <AiFillFacebook className='mx-3 fs-1 my-2'/>
     <AiOutlineInstagram className='mx-3 fs-1 my-2'/> <AiFillYoutube className='mx-3 fs-1 my-2'/>
      </div>

        <div className="use mt-2 ">
           <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div> 
            
        
        <p className='py-3 by'>© 2021 MovieBox by shehu Adekumi   </p>
    </div>

    </div>
  )
}

export default Footer