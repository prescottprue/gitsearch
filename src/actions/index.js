export const GET_REPOS = 'GET_REPOS'

export function getRepos (account) {
  return {
    type: GET_REPOS,
    account,
    receivedAt: Date.now()
  }
}
