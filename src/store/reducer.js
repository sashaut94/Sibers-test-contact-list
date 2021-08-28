import {SET_CONTACTS} from './actionsTypes'

const initialState = {
  currentPage: 1,
  amountPerPage: 12,
  contacts: null
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACTS:
      return {...state, contacts: action.contacts}
    default:
      return state
  }
}
