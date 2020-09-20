import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav, Container, Brand} from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
          <Container>
        <Navbar.Brand href="#home"><Link to="/" className='brand-logo assistant'>sitasé</Link></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link ><Link to="/find-books" className='brand-logo assistant'>find books</Link></Nav.Link>
          <Nav.Link href="#features" className='brand-logo assistant'>About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>
  );
}

export default Header;
