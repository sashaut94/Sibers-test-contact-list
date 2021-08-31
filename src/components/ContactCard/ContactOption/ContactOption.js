import React from 'react'
import classes from './ContactOption.module.scss'

export const ContactOption = props => {
  const cls = [classes.ContactOption]
  if (props.type) cls.push(classes[props.type])
  return (
    <p className={cls.join(' ')}>
      <span className={classes.description}>
        {props.description}
      </span>
      {
        props.isLink
          ? <a href={props.email
          ? `mailto:${props.email}`
          : `tel:${props.phone}`}
               className={classes.link}>
            {props.email || props.phone}
          </a>
          : <span className={classes.text}>
            {
              props.text

            }
            </span>
      }
    </p>
  )
}