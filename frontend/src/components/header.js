import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';
const navbarStyle = {
  backgroundColor: 'lightblue',
};
const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '20rem', maxHeight: '6rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
