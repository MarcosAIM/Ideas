import React from 'react';
import { Button } from 'react-bootstrap';

class UserSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};

    }

    LoginDisplay(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedin){
            button = <Button variant="outline-secondary" size="md" >Logout</Button>
        } else {
            button = <Button  variant="outline-secondary" size="md" >Login</Button>
        }
        return (<div><button/></div>);
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn){
            button = <Button variant="outline-secondary" size="md" >Logout</Button>
        } else {
            button = <Button  variant="outline-secondary" size="md" >Login</Button>
        }
        return (<div>{button}</div>);
    }
}

export default UserSection;