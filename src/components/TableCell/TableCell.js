import React from 'react'
import classes from './TableCell.module.scss'

export const TableCell = props => {
  const cls = [classes.TableCell]
  if (props.block) cls.push(classes[props.block])
  return (
    <div className={cls.join(' ')}>
      {props.header
        ? <p className={classes.header}>
          {props.header}
        </p>
        : <>
          {props.children}
        </>
      }
    </div>
  )
}