import { trim } from 'lodash'

export const stringToList = (str) =>
  str.replace(/(?:\n+)/g, ',')
    // .replace(/\s+/g, ',') //TODO: Handle multiple spaces
    .split(',')
    .map(name => trim(name))
