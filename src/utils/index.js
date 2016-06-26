import { trim } from 'lodash'

export const stringToList = (str) => str.replace(/(?:\n+)/g, ',').split(',').map(name => trim(name))
