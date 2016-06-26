import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import repos from './repos'
import selectedUsers from './selectedUsers'

const rootReducer = combineReducers({
  entities,
  selectedUsers,
  repos,
  router: routeReducer
})

export default rootReducer

// Updates an entity cache in response to any action with response.entities.
function entities (state = { selectedUsers: {}, users: {}, repos: {} }, action) {
  if (action.payload && action.payload.entities) {
    return Object.assign({}, state, action.payload.entities)
  }
  return state
}
