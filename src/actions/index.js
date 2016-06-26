import { CALL_API } from 'redux-api-middleware'
import * as types from 'constants/ActionTypes'
import { normalize } from 'normalizr'
import { userSchema } from 'constants/Schema'
import { trim } from 'lodash'
import { stringToList } from '../utils'

const API_ROOT = 'https://api.github.com'

export function getRepos (account) {
  return {
    [CALL_API]: {
      headers: { 'Content-Type': 'application/json' },
      endpoint: `${API_ROOT}/users/prescottprue`,
      method: 'get',
      types: [
        types.GET_REPOS_REQUEST,
        types.GET_REPOS_SUCCESS,
        types.GET_REPOS_FAILURE
      ]
    }
  }
}
export function getUsers (str) {
  // Handle lists that are seperated by lines, commas, or both
  return (dispatch) => stringToList(str).forEach(name => dispatch(getUser(name)))
}
export function getUser (username) {
  if (!username) {
    throw new Error('Username is required to get user data')
  }
  return {
    [CALL_API]: {
      headers: { 'Content-Type': 'application/json' },
      endpoint: `${API_ROOT}/users/${username}`,
      method: 'get',
      types: [
        types.GET_USER_REQUEST,
        {
          type: types.GET_USER_SUCCESS,
          payload: (action, state, res) =>
            res.json()
               .then((json) => normalize(json, userSchema))
        },
        types.GET_USER_FAILURE
      ]
    }
  }
}
export function removeUser (username) {
  if (!username) {
    throw new Error('Username is required to remove data')
  }
  return {
    type: types.REMOVE_USER,
    payload: username
  }
}
