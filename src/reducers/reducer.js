import { PROJECTS_FETCH, USER_FETCH } from '../constants';

export default function fetching(state = {
    projects: [],
    user: []
  }, action) {
  switch(action.type) {
    case PROJECTS_FETCH: 
      return Object.assign({}, state, {
        projects: action.projects
      })
    case USER_FETCH:
      return Object.assign({}, state, {
        user: action.user
      })
    default:
      return state;
  }
};