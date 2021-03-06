import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  REMOVE_USER
} from '../constants/ActionTypes'
export default function selectedUsers (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case GET_USER_FAILURE:
      console.error('error getting user:', action)
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload
      })
    case GET_USER_SUCCESS:
      if (!action.payload) {
        console.error('User not found')
        return state
      }
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, action.payload.result]
      })
    case REMOVE_USER:
      if (!action.payload) {
        console.error('User not found')
        return state
      }
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.filter(user => user !== action.payload)
      })
    default:
      return state
  }
}
