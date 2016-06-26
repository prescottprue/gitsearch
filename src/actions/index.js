import { CALL_API, Schemas } from '../middleware/api'
import { trim } from 'lodash'
import {
  GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE
  GET_REPOS_REQUEST, GET_REPOS_SUCCESS, GET_REPOS_FAILURE,
  STARRED_REQUEST, STARRED_SUCCESS, STARRED_FAILURE
} from '../constants/ActionTypes'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchUser (login) {
  return {
    [CALL_API]: {
      types: [ GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE ],
      endpoint: `users/${login}`,
      schema: Schemas.USER
    }
  }
}

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadUser (login, requiredFields = []) {
  return (dispatch, getState) => {
    const user = getState().entities.users[login]
    if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
      return null
    }
    return dispatch(fetchUser(login))
  }
}

// Handle lists that are seperated by lines, commas, or both
export const loadUsers = (list) =>
  (dispatch) =>
    list
      .replace(/(?:\n+)/g, ',')
      .split(',')
      .map(name => trim(name))
      .forEach(login => dispatch(loadUser(login)))

// Fetches a single repository from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchRepo (fullName) {
  return {
    [CALL_API]: {
      types: [ GET_REPO_REQUEST, GET_REPO_SUCCESS, GET_REPO_FAILURE ],
      endpoint: `repos/${fullName}`,
      schema: Schemas.REPO
    }
  }
}

// Fetches a single repository from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadRepo (fullName, requiredFields = []) {
  return (dispatch, getState) => {
    const repo = getState().entities.repos[fullName]
    if (repo && requiredFields.every(key => repo.hasOwnProperty(key))) {
      return null
    }

    return dispatch(fetchRepo(fullName))
  }
}



// Fetches a page of starred repos by a particular user.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchStarred(login, nextPageUrl) {
  return {
    login,
    [CALL_API]: {
      types: [ STARRED_REQUEST, STARRED_SUCCESS, STARRED_FAILURE ],
      endpoint: nextPageUrl,
      schema: Schemas.REPO_ARRAY
    }
  }
}

// Fetches a page of starred repos by a particular user.
// Bails out if page is cached and user didn’t specifically request next page.
// Relies on Redux Thunk middleware.
export function loadStarred(login, nextPage) {
  return (dispatch, getState) => {
    const {
      nextPageUrl = `users/${login}/starred`,
      pageCount = 0
    } = getState().pagination.starredByUser[login] || {}

    if (pageCount > 0 && !nextPage) {
      return null
    }

    return dispatch(fetchStarred(login, nextPageUrl))
  }
}

export const STARGAZERS_REQUEST = 'STARGAZERS_REQUEST'
export const STARGAZERS_SUCCESS = 'STARGAZERS_SUCCESS'
export const STARGAZERS_FAILURE = 'STARGAZERS_FAILURE'

// Fetches a page of stargazers for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchStargazers(fullName, nextPageUrl) {
  return {
    fullName,
    [CALL_API]: {
      types: [ STARGAZERS_REQUEST, STARGAZERS_SUCCESS, STARGAZERS_FAILURE ],
      endpoint: nextPageUrl,
      schema: Schemas.USER_ARRAY
    }
  }
}

// Fetches a page of stargazers for a particular repo.
// Bails out if page is cached and user didn’t specifically request next page.
// Relies on Redux Thunk middleware.
export function loadStargazers(fullName, nextPage) {
  return (dispatch, getState) => {
    const {
      nextPageUrl = `repos/${fullName}/stargazers`,
      pageCount = 0
    } = getState().pagination.stargazersByRepo[fullName] || {}

    if (pageCount > 0 && !nextPage) {
      return null
    }

    return dispatch(fetchStargazers(fullName, nextPageUrl))
  }
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
}
