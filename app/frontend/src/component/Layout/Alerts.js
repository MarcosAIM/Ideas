import React from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Alerts extends React.Component {

  static propTypes = {
    error: PropTypes.object.isRequired
  }

    componentDidUpdate(prevProps){
      const { error, alert } = this.props;
        if(error !== prevProps.error){
          if(error.msg.title) alert.error(`Title: ${error.msg.title.join()}`);
          if(error.msg.description) alert.error(`Description: ${error.msg.description.join()}`);
        }

    }
    render() {
      return <React.Fragment/>;
    }
  }
  
const mapStateToProps = state =>({
  error: state.errors

});

export default connect(mapStateToProps)(withAlert()(Alerts));