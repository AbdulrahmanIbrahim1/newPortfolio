import React from 'react'
import { Container, Nav,  Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-black ">
        <Container>
          <Navbar.Brand className='text-main' href="#home">Abdelrahman Ibrahim</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className=' link' href="#home">Home</Nav.Link>
              <Nav.Link className='  link' href="#projects">Projects</Nav.Link>
              <Nav.Link className=' link ' href="#about">About</Nav.Link>
              <Nav.Link className='  link' href="#link">Link</Nav.Link>
              <Nav.Link className='  link' href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
