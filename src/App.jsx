
import './App.css'
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Moviedetails from './pages/Moviedetails'
import Error from './pages/Error'

function App() {


  return (
    <>
     {/* <Header/> */}
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Moviedetails/:movieId' element={<Moviedetails/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
