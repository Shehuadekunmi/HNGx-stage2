import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Card from 'react-bootstrap/Card';
import tra from '../assets/tral.png'
import '../style/Singlemovie.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import play from '../assets/play.png'
import {AiFillStar, AiOutlineUnorderedList} from 'react-icons/ai'
import tic from '../assets/tick.png'
import Loading from '../components/Loading';
import { FaHeart } from "react-icons/fa";


const Singlemovie = () => {
  const [color, setColor] = useState("gray");

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([]);
  const api_key = '319e3d1d9a6a05f9763ef1ddf07c2f2e'

  const {movieId} = useParams();
  const url = ` https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`

  const fetchData = async () =>{
   try {
    const fetchedUrl = await axios(url);
    const data = fetchedUrl.data
   setMovies(data)
   console.log(data);
   } catch (error) {
    console.log(error);
   }
   setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [movieId])

  const handleClick = () => {
    color === "gray" ? setColor("red") : setColor("gray");
  };


const image_path = 'https://image.tmdb.org/t/p/w1280';
const {backdrop_path, id,  runtime, release_date, overview, title, genres} = movies;

  return (
    <div>
      <Sidebar/>

      <div className='my-3'>
        {
          backdrop_path ? (
            <div className='watch text-white' style={{backgroundImage: `url(${image_path}${backdrop_path})`}}>
                        <h1  className=' text-center ' > Watch Trailer</h1>
                        <img src={play} alt="" className='pla text-center d-flex justify-content-center mx-auto'/>

            </div>
          ) :
          <p>NO DATA FOR NOW</p>
        }
      </div>

        {
          loading? <Loading/> :
          <section className='single my-3 d-md-flex justify-content-between px-lg-5 py-lg-3 px-2 ' key={id}>
<div className="top">
  <div className="hou d-fle flex-wrap my- ">
 <div className='d-flex gap-2 jumi'>
   <h6 data-testid="movie-title">{title}</h6> 
   <p>      <FaHeart style={{ color: color }} onClick={handleClick} className='fav' /></p>
</div>
  <div className="but"><button >Action</button>  <button>Drama</button></div>
  <h5 data-testid="movie-release_date" >{release_date}</h5>
  <p data-testid="movie-runtime">{runtime}</p>
  </div>
  <p data-testid="movie-overview">{overview}</p>
</div>
       
        <div className='ico mt-md-3'>
          <h5> <AiFillStar className='fil'/> <span className='opacity-50'>8.5</span>  | 350k</h5>
          <button className='see btn text-white my-2'> <img src={tic} alt="" /> See Showtimes</button> <br />
          <button className='more  mb-3'><AiOutlineUnorderedList/> More watch options</button>
        </div>
        
      </section>
        }
      
    </div>
  )
}

export default Singlemovie