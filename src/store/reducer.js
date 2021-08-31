import {
  SET_CONTACTS,
  SET_CURRENT_PAGE,
  SET_EDITABLE_CONTACT_ID,
  SET_FORM_CONTROLS,
  SET_FORM_STATE,
  SET_PER_PAGE_AMOUNT,
  SET_PER_PAGE_STATE,
  SET_SEARCH,
  SET_TYPE_OF_CONTACTS
} from './actionsTypes'
import {fillFormControls} from '../functions'

const initialState = {
  currentPage: 1,
  amountPerPage: 6,
  contacts: [],
  typeOfContacts: 'All contacts',
  formControls: fillFormControls(),
  editableContactId: null,
  isForm: false,
  search: '',
  perPage: false,
  loading: false,
  error: null
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PER_PAGE_AMOUNT:
      return {...state, amountPerPage: action.number}
    case SET_PER_PAGE_STATE:
      return {...state, perPage: action.state}
    case SET_SEARCH:
      return {...state, search: action.value}
    case SET_EDITABLE_CONTACT_ID:
      return {...state, editableContactId: action.id}
    case SET_FORM_CONTROLS:
      return {...state, formControls: action.controls}
    case SET_FORM_STATE:
      return {...state, isForm: action.state}
    case SET_TYPE_OF_CONTACTS:
      return {...state, typeOfContacts: action.payload}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.number}
    case SET_CONTACTS:
      return {...state, contacts: action.contacts}
    default:
      return state
  }
}
