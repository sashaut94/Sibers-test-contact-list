import {SET_CONTACTS} from './actionsTypes'
import axios from 'axios'

export function setContacts(contacts) {
  return {
    type: SET_CONTACTS,
    contacts
  }
}

export function fetchContacts() {
  return async dispatch => {
    const contactsFromStorage = localStorage.getItem('contacts')
    if (contactsFromStorage) {
      console.log('from storage')
      dispatch(setContacts(JSON.parse(contactsFromStorage)))
    } else {
      try {
        const response = await axios.get('https://demo.sibers.com/users')
        localStorage.setItem('contacts', JSON.stringify(response.data))
        console.log('from server')
        dispatch(setContacts(response.data))
      } catch (e) {
        console.log(e)
      }
    }
  }
}