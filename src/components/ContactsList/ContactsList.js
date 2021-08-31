import React from 'react'
import ContactCard from '../ContactCard/ContactCard'
import classes from './ContactsList.module.scss'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

export const ContactsList = props => {
  return props.contacts.length ?
    <TransitionGroup component='div'>
      {props.contacts.map(contact => {
        const {city, state, zipcode} = contact.address
        return <CSSTransition
          key={contact.id}
          classNames='swipe'
          timeout={1000}
        >
          <ContactCard
            key={contact.id}
            id={contact.id}
            avatar={contact.avatar}
            username={contact.username}
            name={contact.name}
            email={contact.email}
            city={city}
            state={state}
            zipcode={zipcode}
            phone={contact.phone}
            company={contact.company.name}
            favorite={contact.favorite}
          />
        </CSSTransition>
      })}
    </TransitionGroup>
    :
    <div className={classes.noContacts}>
      There are no such contacts
    </div>
}