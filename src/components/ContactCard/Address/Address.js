import React from 'react'
import {ContactOption} from '../ContactOption/ContactOption'
import {TableCell} from '../../TableCell/TableCell'

const options = [
  {id: 1, text: 'city'},
  {id: 2, text: 'state'},
  {id: 3, text: 'zipcode'},
]

export const Address = props => {
  return (
    <TableCell block='address'>
      {
        options.map(option => (
          <ContactOption
            key={option.id}
            description={option.text}
            text={props[option.text]}
          />
        ))
      }
    </TableCell>
  )
}