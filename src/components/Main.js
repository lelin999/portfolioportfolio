import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects, fetchUser } from '../actions/index';

class Main extends Component {
  componentDidMount() {
    this.props.fetchUserData(`http://localhost:8000/users`);
  }

  render() {
    return(
      <div className="Project">
        {this.props.projects.map((project) => (
          <Panel header={project.name} bsStyle="primary">
            <ul>Description: {project.description}</ul>
            <ul>Github Link: {project.github}</ul>
            <ul>UserName: <Link to={`/users/${project._user}`}>{project.userName}</Link></ul>
          </Panel>
        ))}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchProjects(url)),
    fetchUserData: (url) => dispatch(fetchUser(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);