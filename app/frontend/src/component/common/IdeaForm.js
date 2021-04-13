import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addIdea } from '../../actions/ideas';

class IdeaForm extends React.Component {
  state = {
    title: '',
    description: '',
  };

  static propTypes = {
    addIdea: PropTypes.func.isRequired
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    const idea = { title, description };
    this.props.addIdea(idea);
    this.setState({
      title: '',
      description: '',
    });
  };


  render() {
    const {title, description} = this.state;
    return (
        <React.Fragment>
            <div className="card card-body mt-4 mb-4">
                <h2>Add Idea</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>title</label>
                        <input
                          className="form-control"
                          type="text"
                          name="title"
                          onChange={this.onChange}
                          value={title}
                        />
                    </div>

                    <div className="form-group">
                        <label>description</label>
                        <input
                          className="form-control"
                          type="text"
                          name="description"
                          onChange={this.onChange}
                          value={description}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
  }
}

export default connect(null, { addIdea })(IdeaForm);
