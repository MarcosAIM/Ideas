import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserSection from '../user/UserSection';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
  .nav {
    justify-content-center
  }
`;

class TopNavBar extends React.Component{

  render() {
    return (
        <Styles>
          <Navbar expand='md'>
            <Navbar.Brand href="/">IDEAS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <UserSection/>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
    );
  }
}


export default TopNavBar;
