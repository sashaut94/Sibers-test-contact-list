import React from 'react'
import classes from './Header.module.scss'
import {Button} from '../Button/Button'
import {connect} from 'react-redux'
import {setCurrentPage, setFormState, setTypeOfContacts} from '../../store/actionCreator'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import SearchInput from "../SearchInput/SearchInput"
import PerPage from '../PerPage/PerPage'

const buttons = [
  {id: 1, type: 'roundLeft', value: 'All contacts'},
  {id: 2, type: 'roundRight', value: 'Favorites'}
]

const Header = props => {
  return (
    <header className={classes.Header}>
      <SearchInput/>

      <div className={classes.buttons}>
        {
          buttons.map(button => {
            const isActive = props.typeOfContacts === button.value
            return (
              <Button
                key={button.id}
                type={button.type}
                active={isActive}
                onClick={() => {
                  props.setTypeOfContacts(button.value)
                  props.setCurrentPage(1)
                }}
                disabled={isActive}
              >
                {
                  button.value
                }
              </Button>
            )
          })
        }
      </div>

      <p className={classes.found}>Found {props.amount} contacts </p>

      <Button
        type='addContact'
        onClick={() => props.setFormState(true)}
      >
        <FontAwesomeIcon icon={faPlus}/>
        <span className={classes.addButton}>
         Add contact
        </span>
      </Button>

      <PerPage/>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    typeOfContacts: state.typeOfContacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTypeOfContacts: (type) => dispatch(setTypeOfContacts(type)),
    setFormState: (state) => dispatch(setFormState(state)),
    setCurrentPage: (number) => dispatch(setCurrentPage(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)