import { CALL_API } from 'redux-api-middleware'
import * as types from 'constants/ActionTypes'

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
        types.GET_USER_SUCCESS,
        types.GET_USER_FAILURE
      ]
    }
  }
}

//

// {
//   type: types.GET_REPOS_SUCCESS,
//   payload: (action, state, res) => {
//     return res.json().then((json) => normalize())
//   }
// }
