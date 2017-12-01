import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class User extends Component {
  componentDidMount() {
    this.props.fetchUserData(`http://localhost:8000/users/${this.props.match.params.id}`);
  }

  test() {
    console.log(this.props.user.projects);
  }

  render() {
    return(
      <div className="User">
      <ListGroup>
        <ListGroupItem>Name: {this.props.user.name}</ListGroupItem>
        <ListGroupItem>Phone: {this.props.user.phone}</ListGroupItem>
        <ListGroupItem>Email: {this.props.user.email}</ListGroupItem>
      </ListGroup>
      {this.test()}
      <button bsStyle="primary"><Link to="/">Main Page</Link></button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (url) => dispatch(fetchUser(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);