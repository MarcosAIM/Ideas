import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { deleteIdea, getIdeas } from "../../actions/ideas"; 

class Ideas extends React.Component{
    static propTypes = {
        ideas: PropTypes.array.isRequired,
        getIdeas: PropTypes.func.isRequired,
        deleteIdea: PropTypes.func.isRequired,
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
                { this.props.ideas.map((idea) => (
                  <tr key={idea.id}>
                  <td>{idea.title}</td>  
                  <td>{idea.description}</td>
                  <td>{idea.creator_profile}</td>
                  <td><button onClick={this.props.deleteIdea.bind(this, idea.id)} className = "btn btn-danger btn-sm">Delete</button></td>
                  </tr>
                ))}
              </tbody>


            </table>

            </Container>
        );
    }
}

const mapStateToProps = state =>({
    ideas: state.ideas.ideas
});

export default connect(mapStateToProps, { getIdeas, deleteIdea } )(Ideas);