import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchProjects } from '../actions/index';
import { Jumbotron } from 'react-bootstrap';
import Main from './Main';
import User from './User';

class App extends Component {
  componentDidMount() {
    this.props.fetchProjectData('http://localhost:8000/projects/all');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Jumbotron>
            <div className="AppIntro">
              <h2>View projects and portfolios here!</h2>
            </div>
          </Jumbotron>
          <Route exact path="/" component={Main} />
          <Route path={`/users/:id`} component={User} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjectData: (url) => dispatch(fetchProjects(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);