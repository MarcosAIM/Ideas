import React from 'react';
import { Navbar,Nav, Button} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';
import { logoutUser } from "../../actions/auth";

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
`;

class TopNavBar extends React.Component{
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
  }

  render() {
    const  { isAuthenticated, thinker } = this.props.auth;

    const authLinks = (
      <div>
        <span className="navbar-text mr-3">
          <strong>
            { thinker ? `Welcome ${thinker.username}` : "" }
          </strong>
        </span>
      <Button onClick={this.props.logoutUser}>LOGOUT</Button>
      </div>
    );

    const guessLinks = (
      <div>
      <Nav.Item>
      <Nav.Link>
        <Link to ='/register'>Register</Link>
      </Nav.Link>
    </Nav.Item>

      <Nav.Item>
        <Nav.Link>
          <Link to ='/login'>Login</Link>
        </Nav.Link>
      </Nav.Item>
      </div>
    );


    return (
        <Styles>
          <Navbar expand='md'>
            <Navbar.Brand href="/">IDEAS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                
                <Nav.Item>
                  <Nav.Link>
                    <Link to ='/'>Home</Link>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>
                    <Link to ='/new-idea'>New</Link>
                  </Nav.Link>
                </Nav.Item>

                {isAuthenticated ? authLinks : guessLinks}
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
    );
  }
}

const mapStateToPropTypes = ( state) => ({
  auth: state.auth
});

export default connect(mapStateToPropTypes, {logoutUser})(TopNavBar);
