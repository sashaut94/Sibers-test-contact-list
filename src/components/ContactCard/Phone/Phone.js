import React from 'react'
import {ContactOption} from '../ContactOption/ContactOption'
import {TableCell} from '../../TableCell/TableCell'

export const Phone = props => {
  return (
    <TableCell block='phone'>
      <ContactOption
        description='Phone'
        phone={props.phone}
        type='phone'
        isLink
      />
    </TableCell>
  )
}