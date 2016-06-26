import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import users from './users'
import repos from './repos'

const rootReducer = combineReducers({
  entities,
  users,
  repos,
  router: routeReducer
})

export default rootReducer

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {} }, action) {
  console.log('action:', action.response)
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}
