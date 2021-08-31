import {
  SET_CONTACTS,
  SET_CURRENT_PAGE,
  SET_EDITABLE_CONTACT_ID,
  SET_FORM_CONTROLS,
  SET_FORM_STATE,
  SET_TYPE_OF_CONTACTS,
  SET_SEARCH,
  SET_PER_PAGE_STATE,
  SET_PER_PAGE_AMOUNT
} from './actionsTypes'
import axios from 'axios'
import {fillFormControls, getRandom} from '../functions'

const avatars = [
  // eslint-disable-next-line no-useless-escape
  "https:\/\/i.imgur.com\/pYCekqv.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/uifaces.co\/our-content\/donated\/wEMibhpA.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/images.pexels.com\/photos\/432580\/pexels-photo-432580.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/images.unsplash.com\/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/images.generated.photos\/fJ8DTPRAgWaRYMOHqYnEsXuJWOvG052PYY7wiIoB4Jg\/rs:fit:512:512\/czM6Ly9pY29uczgu\/Z3Bob3Rvcy1wcm9k\/LnBob3Rvcy92M18w\/Mjc4MjkwLmpwZw.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/randomuser.me\/api\/portraits\/women\/16.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/uifaces.co\/our-content\/donated\/UCIrofcA.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/images.generated.photos\/60sv5-LVG7C0MoWNy9_tlAPTrO7_D51bT9By6ljIscg\/rs:fit:512:512\/czM6Ly9pY29uczgu\/Z3Bob3Rvcy1wcm9k\/LnBob3Rvcy92M18w\/MTY0MjYyLmpwZw.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/images.generated.photos\/ope_mySxrArKmYZ-husaCGy-cn6x9I4QZ3gsatsNYwc\/rs:fit:512:512\/czM6Ly9pY29uczgu\/Z3Bob3Rvcy1wcm9k\/LnBob3Rvcy92M18w\/ODI0NjMyLmpwZw.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/uifaces.co\/our-content\/donated\/oLkb60i_.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/images.unsplash.com\/photo-1509380836717-c4320ccf1a6f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=e01c8c45a063daaf6d6e571a32bd6c90",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/uifaces.co\/our-content\/donated\/9CoYihJ4.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/images.generated.photos\/s8zU0sgzLArBQIwwciNvkiJ_ktS9CrrXyBhwrHC4oiE\/rs:fit:512:512\/czM6Ly9pY29uczgu\/Z3Bob3Rvcy1wcm9k\/LnBob3Rvcy92M18w\/MDUwNjE0LmpwZw.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/images.generated.photos\/HeRTU31T6rqkZhQ6JHQUL6BQhYiJ9gu03MeR5R9M_3E\/rs:fit:512:512\/czM6Ly9pY29uczgu\/Z3Bob3Rvcy1wcm9k\/LnBob3Rvcy92M18w\/NTE2Nzc1LmpwZw.jpg",
  // eslint-disable-next-line no-useless-escape
  "https:\/\/i.imgur.com\/8i14Q3Y.jpg"
]

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
      const contacts = JSON.parse(contactsFromStorage)
      dispatch(setContacts(contacts))
    } else {
      try {
        const response = await axios.get('https://demo.sibers.com/users')
        const contactsWithAvatar = response.data.map(item => ({
          ...item,
          avatar: avatars[getRandom(0, 14)]
        }))
        dispatch(updateContacts(contactsWithAvatar))
      } catch (e) {
        console.log(e)
      }
    }
  }
}

export function toggleFavourite(contacts, id) {
  return dispatch => {
    const newContacts = [...contacts]
    const current = newContacts.find(item => item.id === id)
    const index = contacts.indexOf(current)
    const newCurrent = {...current}
    newCurrent.favorite = !newCurrent.favorite
    newContacts[index] = newCurrent
    dispatch(updateContacts(newContacts))
  }
}

export function removeContact(contacts, id) {
  return dispatch => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    dispatch(updateContacts(newContacts))
  }
}

export function updateContacts(item) {
  return dispatch => {
    localStorage.setItem('contacts', JSON.stringify(item))
    dispatch(setContacts(item))
  }
}

export function setCurrentPage(number) {
  return {
    type: SET_CURRENT_PAGE,
    number
  }
}

export function setTypeOfContacts(type) {
  return {
    type: SET_TYPE_OF_CONTACTS,
    payload: type
  }
}

export function setFormState(state) {
  return {
    type: SET_FORM_STATE,
    state
  }
}

export function setFormControls(controls) {
  return {
    type: SET_FORM_CONTROLS,
    controls
  }
}

export function changeInput(e, controls, index) {
  return dispatch => {
    const newControls = [...controls]
    const newControl = {...newControls[index]}
    newControl.touched = true
    newControl.isValid = e.target.value !== ''
    newControl.value = e.target.value
    newControls[index] = newControl
    dispatch(setFormControls(newControls))
  }
}

export function fillFormControlsFromCard(controls, contact) {
  return dispatch => {
    const newControls = [...controls]
    for (let i = 0; i < controls.length; i++) {
      const newControl = {...newControls[i]}
      newControl.value = contact[newControl.label]
      newControls[i] = newControl
    }
    dispatch(setFormControls(newControls))
    dispatch(setEditableContactId(contact.id))
    dispatch(setFormState(true))
  }
}

export function setEditableContactId(id) {
  return {
    type: SET_EDITABLE_CONTACT_ID,
    id
  }
}

export function editContact(controls, id) {
  return dispatch => {
    let current, index
    const newContacts = JSON.parse(localStorage.getItem('contacts'))
    if (id !== null) {
      current = newContacts.find(contact => contact.id === id)
      index = newContacts.indexOf(current)
    } else {
      current = {}
      current.company = {}
      current.address = {}
      current.avatar = avatars[getRandom(0, 14)]
      index = newContacts.length
      current.id = index
    }
    for (let i = 0; i < controls.length; i++) {
      if (controls[i].label !== 'company' && controls[i].label !== 'city' && controls[i].label !== 'state' && controls[i].label !== 'zipcode') {
        current[controls[i].label] = controls[i].value
      } else {
        if (controls[i].label === 'company') {
          current['company'].name = controls[i].value
        } else {
          current['address'][controls[i].label] = controls[i].value
        }
      }
    }
    newContacts[index] = current
    dispatch(updateContacts(newContacts))
    dispatch(setFormState(false))
  }
}

export function clearFormControls() {
  return dispatch => {
    const newControls = fillFormControls()
    dispatch(setFormControls(newControls))
    dispatch(setEditableContactId(null))
  }
}

export function setSearch(value) {
  return {
    type: SET_SEARCH,
    value
  }
}

export function setPerPageState(state) {
  return {
    type: SET_PER_PAGE_STATE,
    state: !state
  }
}

export function setPerPageAmount(number) {
  return {
    type: SET_PER_PAGE_AMOUNT,
    number
  }
}