import React from 'react';
import Ideas from "../common/Ideas";
import IdeasForm from '../common/IdeaForm'


class DashBoard extends React.Component {
  render() {
    return (
        <React.Fragment>
            <h1>DashBoard</h1>
            <IdeasForm/>
            <Ideas />
        </React.Fragment>
      
    );
  }
}

export default DashBoard;