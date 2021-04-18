import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { registerUser } from '../../actions/auth';
import { createMessage } from "../../actions/messages";
export class Register extends React.Component {
    state = {
        username: '',
        email: '',
        date_of_birth: '',
        password: '',
        password2: '',
    };

    static propTypes = {
      registerUser: PropTypes.func.isRequired,
      createMessage: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool
    }
    onSubmit = e =>{
        e.preventDefault();
        const { username,email,date_of_birth,password,password2 } = this.state
        if(password !== password2){
          this.props.createMessage({passwordsNoMatch: "Passwords do not match. "});
        }
        else{
          const newUser = {username,email,date_of_birth,password};
          this.props.registerUser(newUser);
        }
    };

    onChange = e => this.setState({ [e.target.name]:e.target.value });
  render() {
    if(this.props.isAuthenticated){
      return <Redirect to='/'/>;
    }
    const { username,email,date_of_birth,password,password2 } = this.state
    return (
          <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
              <h2 className="text-center">Register</h2>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    />
                    </div>
                <div className="form-group">
                    <label>Birth Day</label>
                    <input
                    type="date"
                    className="form-control"
                    name="date_of_birth"
                    onChange={this.onChange}
                    value={date_of_birth}
                    />
                   </div>
                   <div className="form-group">
                     <label>Password</label>
                     <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.onChange}
                      value={password}
                     />
                   </div>
                   <div className="form-group">
                     <label>Confirm Password</label>
                     <input
                     type="password"
                     className="form-control"
                     name="password2"
                     onChange={this.onChange}
                     value={password2}
                     />
                   </div>
                   <div className="form-group">
                     <button type="submit" className="btn btn-primary">
                     Register
                     </button>
                   </div>
                   <p>
                   Already have an account? <Link to="/login">Login</Link>
                   </p>
                </form>
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { registerUser, createMessage })(Register);