import { Schema, arrayOf, normalize } from 'normalizr'

export const userSchema = new Schema('users', {
  idAttribute: user => user.login.toLowerCase()
})

export const repoSchema = new Schema('repos', {
  idAttribute: repo => repo.fullName.toLowerCase()
})

repoSchema.define({
  owner: userSchema
})

// Schemas for Github API responses.
export const Schemas = {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  REPO: repoSchema,
  REPO_ARRAY: arrayOf(repoSchema)
}
