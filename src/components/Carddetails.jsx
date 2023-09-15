import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
// import Poster1 from '../assets/Poster1.png'
// import ListGroup from 'react-bootstrap/ListGroup';
import imbd from '../assets/imbd.png'
import app from '../assets/apple.png'
import fav from '../assets/Favorite.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/home.css'
import Loading from './Loading';
import { FaHeart } from "react-icons/fa";



const Carddetails = () => {

  const [color, setColor] = useState("gray");
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([]);
  const api_key = '319e3d1d9a6a05f9763ef1ddf07c2f2e'
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-us`;
  const fetchData = async () => {
    try {
      const fetchedUrl = await axios(url);
      const getdata = fetchedUrl.data.results
      setMovies(getdata)
      console.log(getdata);

    } catch (error) {
      console.log("Error", error);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, [])

  if(loading){
    return<Loading/>
  }


  const handleClick = () => {
    color === "gray" ? setColor("red") : setColor("gray");
  };

  return (
    <section className=" ">

      <div className='cc-container my-4  cardd'>
        {
          movies.slice(0, 10).map((m) => {
            const { id, poster_path, title, release_date, vote_average, genre_ids } = m;
            return (
              <Link to={`singlemovie/${id}`} className='text-decoration-none  ' key={id}>

                <Card style={{ width: '18rem', height:'auto' }} data-testid="movie-card" className='my-3'>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} data-testid="movie-poster" />
                  <Card.Body>
                    <Card.Title className='opa' >
                      <p><img src={fav} alt="" className='text-dark  fav' /> </p>
                      <p data-testid="movie-release-date">{release_date}</p>
                      <h4 data-testid="movie-title">{title}</h4>

                      <div className="ico  ">
                        <p> <img src={imbd} alt="" />  {vote_average} / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                      </div>
                      <p>{genre_ids}</p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            )
          })
        }

        
      </div>
      {/* <FaHeart style={{ color: color }} onClick={handleClick} className='fav text-' />; */}

    </section>
  )
}

export default Carddetails