import React from 'react';
import { logoutUser } from "../../actions/auth";
import { Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';

class UserSection extends React.Component{
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logoutUser: PropTypes.func.isRequired
      }

    render(){
        const  { isAuthenticated, thinker } = this.props.auth;

        const username = (
            <span className="navbar-text mr-3 light">
                <strong>
                    { thinker ? `Welcome ${thinker.username}` : "" }
                </strong>
            </span>
        );

        const logout = (
            <Button onClick={this.props.logoutUser}>LOGOUT</Button>
        );

        const authLinks = ([username,logout]);

        const registerLink = (
                <Nav.Item>
                    <Nav.Link>
                        <Link to ='/register'>Register</Link>
                    </Nav.Link>
                </Nav.Item>
        );
        const loginLink = (
                <Nav.Item>
                    <Nav.Link>
                        <Link to ='/login'>Login</Link>
                    </Nav.Link>
                </Nav.Item>
        );

        const guessLinks = ([registerLink,loginLink]);

        return (isAuthenticated ? authLinks : guessLinks);
    }
}
const mapStateToPropTypes = ( state) => ({
    auth: state.auth
  });

export default connect(mapStateToPropTypes, {logoutUser})(UserSection);
