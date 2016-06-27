import { trim } from 'lodash'

export const stringToList = (str) => str.replace(/\s+/g, ',').split(',').map(name => trim(name))
