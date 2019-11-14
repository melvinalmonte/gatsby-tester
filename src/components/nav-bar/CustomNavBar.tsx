import * as React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {navigate} from 'gatsby-link'

const CustomNavbar: React.SFC = () => {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={() => navigate("/")}> Some NavBar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigate("/page3")}>
            Form
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/page2")}>Grid</Nav.Link>
        </Nav>
      </Navbar>
    
}

export default CustomNavbar