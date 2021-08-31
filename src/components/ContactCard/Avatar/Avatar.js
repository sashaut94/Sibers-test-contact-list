import React from 'react'
import classes from './Avatar.module.scss'
import {TableCell} from '../../TableCell/TableCell'

export const Avatar = props => {
  return (
    <TableCell block='avatar'>
      <img
        className={classes.image}
        width={150}
        height={150}
        src={props.avatar}
        alt="avatar"
      />
    </TableCell>
  )
}