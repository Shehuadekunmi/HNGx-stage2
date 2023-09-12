import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo.png'
import menu from '../assets/Menu.png'
import { BsSearch } from 'react-icons/bs'
import '../style/header.css'

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="text-white head py-3">
        <Container fluid>
          <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
{/* 
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>

            </Nav> */}
            <Form className="d-flex ">

               <Form.Control
                type="search"
                placeholder="What do you want to watch?"
                // className="me-2"
                aria-label="Search"
                className='mob my-2 me-2'
              />
             
              <p> <input type="text" className='bg search desk  text-white me-5' placeholder="What do you want to watch?" /> </p>
              <BsSearch className='bsicon' />
            </Form>
            <Nav
              className="me-auto  my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>

            <Nav.Link href="#action1" className='text-white'>Sign in</Nav.Link>
            <img src={menu} alt="" className='ms-lg-5 my-2' />


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
