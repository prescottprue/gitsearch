import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  router: routeReducer
})

export default rootReducer
