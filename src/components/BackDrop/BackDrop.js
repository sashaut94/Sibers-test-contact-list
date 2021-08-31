import React from 'react'
import classes from './BackDrop.module.scss'
import {connect} from 'react-redux'
import {clearFormControls, setFormState} from '../../store/actionCreator'

const BackDrop = props => {
  return (
    <div
      className={classes.BackDrop}
      onClick={(e) => {
        e.stopPropagation()
        props.setFormState(false)
        setTimeout(() => props.clearFormControls(), 1000)
      }}
    />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setFormState: (state) => dispatch(setFormState(state)),
    clearFormControls: () => dispatch(clearFormControls())
  }
}

export default connect(null, mapDispatchToProps)(BackDrop)