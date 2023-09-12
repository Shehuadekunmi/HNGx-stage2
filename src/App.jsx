
import './App.css'
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Singlemovie from './pages/Singlemovie'

function App() {


  return (
    <>
     {/* <Header/> */}
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/singlemovie' element={<Singlemovie/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
