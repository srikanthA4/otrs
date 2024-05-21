import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const NavBarPanel = () => {
  return (
    // <div className='navBar'>
    <div><img src="https://github.com/srikanth251998/go/blob/6797343617a64dc6929c6f5002e51fab848b1bfa/auto-intelli-logo.png?raw=true" style={{ maxWidth: '210px', maxHeight: '100px' }}  />
      
      
    <Navbar expand="lg" className="bg-secondary-subtle fw-bold d-flex mb-3 ">
      
      {/* <Container className='ms-0 bg-danger w-100 d-flex '> */}
        <NavDropdown title="Tickets" id="basic-nav-dropdown" className=' ms-3 bg-dark bg-gradient text-white me-auto p-2'>
            <NavDropdown.Item href="/newticket">New Ticket</NavDropdown.Item>
            <NavDropdown.Item href="/dash">My Tickets</NavDropdown.Item>
            <NavDropdown.Item href="/companytickets">Company Tickets</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="/search">Search</NavDropdown.Item>
        </NavDropdown>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav" className=''> */}
          <Nav className="">
            <Nav.Link href="/preference" className=' me-2 text-body-secondary p-2 border border-1 border-secondary-subtle rounded '>Preferences</Nav.Link>
            <Nav.Link href="/" className='me-3 text-body-secondary p-2 border border-1 border-secondary-subtle rounded'>Logout</Nav.Link>
            
          </Nav>
        {/* </Navbar.Collapse> */}
      {/* </Container> */}
    </Navbar>
    </div>
    // </div>
  )
}

export default NavBarPanel