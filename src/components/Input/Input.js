import React from 'react'
import classes from './Input.module.scss'
import {connect} from 'react-redux'
import {changeInput} from '../../store/actionCreator'

const Input = props => {
  return (
    <div className={classes.Input}>
      <p className={classes.label}>
        {props.label}
      </p>

      <input
        className={classes.input}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.changeInput(e, props.formControls, props.index)}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formControls: state.formControls
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeInput: (e, controls, index) => dispatch(changeInput(e, controls, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)