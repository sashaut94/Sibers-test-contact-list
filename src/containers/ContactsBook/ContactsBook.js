import React, {useEffect} from 'react'
import classes from './ContactsBook.module.scss'
import {connect} from 'react-redux'
import {fetchContacts} from '../../store/actionCreator'

const ContactsBook = props => {
  const {fetchContacts} = props

  useEffect(() => {
    fetchContacts()
  }, [fetchContacts])

  return <div className={classes.ContactsBook}>
    {
      props.contacts
        ? props.contacts.map(contact => <img
          width={200}
          height={200}
          src={contact.avatar}
          alt="avatar"/>)
        : <p>
          ничего нет
        </p>
    }
  </div>
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContacts: () => dispatch(fetchContacts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBook)