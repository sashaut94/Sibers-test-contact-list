import React from 'react'
import {ContactOption} from '../ContactOption/ContactOption'
import {TableCell} from '../../TableCell/TableCell'

const options = [
  {id: 1, text: 'username'},
  {id: 2, text: 'name'},
  {id: 3, text: 'email', isLink: true}
]

export const ContactInfo = props => {
  return (
    <TableCell block='contactInfo'>
      {
        options.map(option => (
          <ContactOption
            key={option.id}
            description={option.text}
            text={props[option.text]}
            email={props.email}
            isLink={option.isLink}
          />
        ))
      }
    </TableCell>
  )
}