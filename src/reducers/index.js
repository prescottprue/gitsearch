import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import users from './users'
import repos from './repos'
const rootReducer = combineReducers({
  users,
  repos,
  router: routeReducer
})

export default rootReducer
