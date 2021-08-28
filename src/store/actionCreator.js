import {SET_CONTACTS} from './actionsTypes'
import axios from 'axios'

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
      console.log('from storage')
      dispatch(setContacts(JSON.parse(contactsFromStorage)))
    } else {
      try {
        const response = await axios.get('https://demo.sibers.com/users')
        const contactsWithAvatar = response.data.map(item => ({
          ...item,
          avatar: avatars[Math.floor(Math.random() * (14 + 1))]
        }))
        localStorage.setItem('contacts', JSON.stringify(contactsWithAvatar))
        console.log('from server')
        dispatch(setContacts(contactsWithAvatar))
      } catch (e) {
        console.log(e)
      }
    }
  }
}