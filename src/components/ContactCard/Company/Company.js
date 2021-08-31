import React from 'react'
import {ContactOption} from '../ContactOption/ContactOption'
import {TableCell} from '../../TableCell/TableCell'

export const Company = props => {
  return (
    <TableCell block='company'>
      <ContactOption
        description='company'
        text={props.company}
        type='company'
      />
    </TableCell>
  )
}