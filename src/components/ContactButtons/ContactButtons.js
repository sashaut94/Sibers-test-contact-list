import React from 'react'
import RemoveButton from '../RemoveButton/RemoveButton'
import {TableCell} from '../TableCell/TableCell'
import FavouriteButton from '../FavouriteButton/FavouriteButton'

export const ContactButtons = props => (
  <TableCell block='buttons'>
    <RemoveButton id={props.id}/>

    <FavouriteButton
      favorite={props.favorite}
      id={props.id}
    />
  </TableCell>
)