import React from 'react'
import classes from './Button.module.scss'

export const Button = props => {
  const cls = [classes.Button]
  if (props.block) cls.push(classes[props.block])
  if (props.type) cls.push(classes[props.type])
  if (props.active) cls.push(classes.active)
  return (
    <button
      className={cls.join(' ')}
      type='button'
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}