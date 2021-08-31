import React from 'react'
import classes from './ContactForm.module.scss'
import {connect} from 'react-redux'
import Input from '../Input/Input'
import {Button} from '../Button/Button'
import {editContact, setFormState} from '../../store/actionCreator'

const ContactForm = props => {
  return (
    <section className={classes.ContactForm}>
      <h2 className={classes.title}>
        Contact
      </h2>

      <p className={classes.text}>
        {
          props.editableContactId !== null
            ? 'Edit contact information'
            : 'Create contact'
        }
      </p>

      <form className={classes.form} action="#">
        {
          props.formControls.map((control, index) => (
            <Input
              key={control.id}
              label={control.label}
              placeholder={`Enter ${control.label}`}
              value={control.value}
              index={index}
            />
          ))
        }

        <Button
          type='oval'
          active
          block='form'
          onClick={() => {
            props.editContact(props.formControls, props.editableContactId)
          }}
        >
          Save changes
        </Button>
      </form>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    formControls: state.formControls,
    editableContactId: state.editableContactId,
    currentPage: state.currentPage,
    amountPerPage: state.amountPerPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editContact: (controls, id) => dispatch(editContact(controls, id)),
    setFormState: (state) => dispatch(setFormState(state)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)