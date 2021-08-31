import React, {useEffect} from 'react'
import classes from './ContactsBook.module.scss'
import {connect} from 'react-redux'
import {fetchContacts, setCurrentPage} from '../../store/actionCreator'
import Header from '../../components/Header/Header'
import PaginationList from '../../components/PaginationList/PaginationList'
import BackDrop from '../../components/BackDrop/BackDrop'
import ContactForm from '../../components/ContactForm/ContactForm'
import {CSSTransition} from 'react-transition-group'
import {ContactsList} from '../../components/ContactsList/ContactsList'

const ContactsBook = props => {
  const {fetchContacts} = props

  useEffect(() => {
    fetchContacts()
  }, [fetchContacts])

  let contacts = []
  let contactsPerPage = []

  if (props.contacts.length) {
    if (props.search) {
      contacts = props.contacts.filter(contact => {
        const {username, name, email, phone, company: {name: company}, address: {city, state, zipcode}} = contact
        const values = [username, name, email, phone, company, city, state, zipcode]
        return values.some(item => item.toLowerCase().includes(props.search.toLowerCase())) ? contact : null
      })
    } else {
      contacts = props.contacts
    }
    if (props.typeOfContacts === 'Favorites') {
      contacts = contacts.filter(item => item.favorite)
    }
    contactsPerPage = contacts.slice(props.amountPerPage * (props.currentPage - 1), props.currentPage * props.amountPerPage)
  }
  if (contacts.length > 0 && contactsPerPage.length === 0) props.setCurrentPage(props.currentPage - 1)

  return (
    <main className={classes.ContactsBook}>
      <h1 className={classes.title}>
        Contacts Book
      </h1>

      <section className={classes.inner}>
        <Header amount={contacts.length}/>

        <ContactsList contacts={contactsPerPage}/>

        {
          contacts.length > props.amountPerPage ? <PaginationList amount={contacts.length}/> : null
        }
      </section>

      <CSSTransition
        timeout={1000}
        in={props.isForm}
        mountOnEnter
        unmountOnExit
        classNames='fade'
      >
        <BackDrop/>
      </CSSTransition>

      <CSSTransition
        timeout={1000}
        in={props.isForm}
        mountOnEnter
        unmountOnExit
        classNames='jumping'
      >
        <ContactForm/>
      </CSSTransition>
    </main>
  )
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    isForm: state.isForm,
    currentPage: state.currentPage,
    amountPerPage: state.amountPerPage,
    search: state.search,
    typeOfContacts: state.typeOfContacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
    setCurrentPage: (number) => dispatch(setCurrentPage(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBook)