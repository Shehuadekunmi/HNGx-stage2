import React, { useState, useEffect, useTransition } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Card from 'react-bootstrap/Card';


const Moviedetails = () => {
  const { movieId } = useParams();
  const url = "https://api.themoviedb.org/3/movie/%7Bmovie_id%7D?api_key={705b3786dab5e0e206440b5d54b07d90}&language"
  const finalUrl = url + movieId;
  const[loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const fetchData = async () => {
    setLoading(true)
    const res = await fetch(finalUrl);
    const data = await res.json();

    if (data.movie) {
      const { id, title, date, image} = data.movie[0]

      const newMovie = { id, title, date, image }
      setMovie(newMovie);

    } else {
      setMovie(null);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchData()
  }, [movieId])

if(loading){
  return <Loading/>
}

if(!movie) {
  return <h2>No movie to display</h2>
}

  return (
    <div className='container mt-2'>

     <Card>
        <Card.Img variant={movie.image} src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
          <p>
            <span className="bg-success text-white p-1 mme-2">Name:</span> {movie.title}
          </p>
          <p>
            <span className="bg-success text-white p-1 me-2">Category:</span> {movie.date}
          </p>
          </Card.Text>
        </Card.Body>
      </Card>



      {/* <div>
        <img src={meal.image} alt={meal.name} className='w-100' style={{height: '400px', objectFit: 'cover'}} />
        <div className="mt-3 mb-3">
          <p>
            <span className="bg-success text-white p-1 mme-2">Name:</span> {meal.name}
          </p>
          <p>
            <span className="bg-success text-white p-1 me-2">Category:</span> {meal.cat}
          </p>
          <p>
            <span className="bg-success text-white p-1 me-2">Tags:</span> {meal.tags}
          </p>
          <p>
            <span className="bg-success text-white p-1 me-2">Area:</span> {meal.area}
          </p>
          <p>
            <span className="bg-success text-white p-1 me-2">Youtube:</span> {meal.youtube}
          </p>
          <p className='lh-lg fw-bold'>
            <span className="bg-success text-white p-1 me-2">Instructions:</span> {meal.instructions}
          </p>
          <ReactPlayer url = {meal.youtube} controls = {true} playing = {true} muted ={false}
          width={''}/>
        </div>
      </div> */}
    </div>
  )
}

export default Moviedetails