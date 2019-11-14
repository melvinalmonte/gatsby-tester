import * as React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'gatsby'

const CustomNavbar: React.SFC = () => {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
        <Link to={'/'}>Some NavBar</Link> 
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
          <Link to={'/'}>Home</Link> 
          </Nav.Link>
          <Nav.Link>
            <Link to={'/page2'}>Grid</Link> 
          </Nav.Link>
          <Nav.Link>
            <Link to={'/page3'}>Forms</Link> 
          </Nav.Link>
        </Nav>
      </Navbar>
    
}

export default CustomNavbar