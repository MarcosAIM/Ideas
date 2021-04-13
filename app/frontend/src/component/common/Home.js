import React from 'react';
import Ideas from "./Ideas";
import IdeasForm from './IdeaForm'


class HOME extends React.Component {
  render() {
    return (
        <React.Fragment>
            <h1>HOME</h1>
            <IdeasForm/>
            <Ideas />
        </React.Fragment>
      
    );
  }
}

export default HOME;
