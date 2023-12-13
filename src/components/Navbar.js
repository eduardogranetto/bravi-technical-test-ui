import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/"> bravi-ui</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/climate">
          Climate
        </Nav.Link>
        <Nav.Link as={Link} to="/bracket_validation">
          Bracket Validation
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;