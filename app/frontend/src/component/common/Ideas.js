import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getIdeas } from "../../actions/ideas"; 

class Ideas extends React.Component{
    static propTypes = {
        ideas: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getIdeas();
    }


    render(){
        return (
            <Container>
                <h1>IDEAS LIST</h1>
                <table className= "table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Author</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                { this.props.ideas.map(ideas => (
                  <tr key={ideas.id}>
                  <td>{ideas.title}</td>  
                  <td>{ideas.description}</td>
                  <td>{ideas.author}</td>
                  <td><button className = "btn btn-danger btn-sm">Delete</button></td>
                  </tr>
                ))}
              </tbody>


            </table>

            </Container>
        )
    }
}

const mapStateToProps = state =>({
    ideas: state.ideas.ideas
});

export default connect(mapStateToProps, { getIdeas } )(Ideas);