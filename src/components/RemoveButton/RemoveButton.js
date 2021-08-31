import React from 'react'
import classes from './RemoveButton.module.scss'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons/faTrashAlt'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import {removeContact} from '../../store/actionCreator'

const RemoveButton = props => {
  return (
    <button
      className={classes.button}
      onClick={(e) => {
        e.stopPropagation()
        props.removeContact(props.contacts, props.id)
      }}
    >
      <FontAwesomeIcon icon={faTrashAlt}/>
    </button>
  )
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    currentPage: state.currentPage,
    amountPerPage: state.amountPerPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeContact: (contacts, id) => dispatch(removeContact(contacts, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton)