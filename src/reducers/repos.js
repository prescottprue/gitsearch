import {
  GET_REPOS_REQUEST,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAILURE
} from '../constants/ActionTypes'
import { toArray } from 'lodash'
export default function users (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case GET_REPOS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case GET_REPOS_FAILURE:
      console.error('error getting repos:', action)
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload
      })
    case GET_REPOS_SUCCESS:
      if (!action.payload || !action.payload.results) {
        console.error('No repos found')
        return state
      }
      return Object.assign({}, state, {
        isFetching: false,
        items: toArray(action.payload.results),
        didInvalidate: false
      })
    default:
      return state
  }
}
