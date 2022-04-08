import { Container,Navbar,Nav } from 'react-bootstrap'
import React from 'react'
import './styles/Navbars.css'
import Button from './Button'

const Navbars = () => {
  return (
    <div className="Navbars">
      <Navbar bg="light" expand="lg" className='bg-transparent'>
          <Container>
            <Navbar.Brand href="#" className='logo'>BCR</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                  <Nav.Link href="#" className='me-3'>Our Services</Nav.Link>
                  <Nav.Link href="#" className='me-3'>Why Us</Nav.Link>
                  <Nav.Link href="#" className='me-3'>Testimonial</Nav.Link>
                  <Nav.Link href="#" className='me-3'>FAQ</Nav.Link>
                  <Button>Register</Button>
                </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </div>
    
  )
}

export default Navbars