import React from 'react'
import {Container,Nav,Navbar,NavDropdown,Form,Button} from 'react-bootstrap';
import {Link, Outlet,NavLink} from 'react-router-dom'
export const Header = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg">
      <Container>
      <Link to="/" style={{textDecoration:'none'}}> <Navbar.Brand style={{color:"white"}} >HOME</Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
           
    <Link to="/add"> <Button variant="info">Add Post</Button></Link> 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
