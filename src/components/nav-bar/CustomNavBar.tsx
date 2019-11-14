import * as React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'gatsby'

const CustomNavbar: React.SFC = () => {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href='/'> Some NavBar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href='/page3'>Form</Nav.Link>
          <Nav.Link href='/page2'>Grid</Nav.Link>
        </Nav>
      </Navbar>
    
}

export default CustomNavbar