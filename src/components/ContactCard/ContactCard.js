import React from 'react'
import classes from './ContactCard.module.scss'
import {Avatar} from './Avatar/Avatar'
import {ContactInfo} from './ContactInfo/ContactInfo'
import {Address} from './Address/Address'
import {Phone} from './Phone/Phone'
import {Company} from './Company/Company'
import {ContactButtons} from '../ContactButtons/ContactButtons'
import {connect} from 'react-redux'
import {fillFormControlsFromCard} from '../../store/actionCreator'

const ContactCard = props => {
  return (
    <article
      className={classes.ContactCard}
      onClick={() => {
        props.fillFormControlsFromCard(props.formControls, props)
      }}
    >
      <Avatar avatar={props.avatar}/>

      <ContactInfo
        username={props.username}
        name={props.name}
        email={props.email}
      />

      <Address
        city={props.city}
        state={props.state}
        zipcode={props.zipcode}
      />

      <Company
        company={props.company}
      />

      <Phone phone={props.phone}/>

      <ContactButtons
        favorite={props.favorite}
        id={props.id}
      />
    </article>
  )
}

function mapStateToProps(state) {
  return {
    formControls: state.formControls
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fillFormControlsFromCard: (controls, contact) => dispatch(fillFormControlsFromCard(controls, contact))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactCard)