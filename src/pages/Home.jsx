import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import '../style/home.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Poster1 from '../assets/Poster1.png'
import imbd from '../assets/imbd.png'
import app from '../assets/apple.png'
import fav from '../assets/Favorite.png'
const Home = () => {
  return (
    <div>

{/* https://api.themoviedb.org/3/movie/%7Bmovie_id%7D?api_key={your_api_key}&language */}
      <Hero />
      <h1>HELLO ooo</h1>
      <section className=' car d-md-flex flex-wrap justify-content-around my-4'>
        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}  data-testid="movie-card" >
            <Card.Img variant="top" src={Poster1} data-testid="movie-poster" />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p data-testid="movie-release-date">USA, 2016 - Current</p>
                <h4 data-testid="movie-title">Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      

        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      

        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      

        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      

        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      

        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      

        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      
        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      

        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      

        <div className='my-4 mx-3 '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster1} />
            <Card.Body>
              <Card.Title className='opa' >
                <p><img src={fav} alt="" className='text-dark  fav' /></p>
                <p>USA, 2016 - Current</p>
                <h4>Stranger Things</h4>
                <div className="ico d-fle ">
                  <p> <img src={imbd} alt="" />  86.0 / 100  <img src={app} alt="" className='ms-5' /> 97% </p>
                </div>
                <p>Action, Adventure, Horror</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      
      
      </section>
      <Footer />
    </div>
  )
}

export default Home