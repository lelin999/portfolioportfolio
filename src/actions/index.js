import { PROJECTS_FETCH, USER_FETCH } from '../constants';
import axios from 'axios';

export function projectsFetch(projects) {
  return {
    type: PROJECTS_FETCH,
    projects
  };
}

export function userFetch(user) {
  return {
    type: USER_FETCH,
    user
  };
}

export function fetchProjects(url) {
  return(dispatch) => {
    axios.get(url)
      .then(res => dispatch(projectsFetch(res.data)))
      .catch(err => console.log("error", err));
  }
}

export function fetchUser(url) {
  return(dispatch) => {
    setTimeout(() => {
      axios.get(url)
      .then(res => dispatch(userFetch(res.data)))
      .catch(err => console.log("error", err));
    }, 0);
  }
}