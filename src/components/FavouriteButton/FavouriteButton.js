import React from 'react'
import classes from './FavouriteButton.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons'
import {faStar as fasStar} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import {toggleFavourite} from '../../store/actionCreator'

const FavouriteButton = props => {
  const cls = [classes.FavouriteButton]
  if (props.favorite) cls.push(classes.favourite)
  return (
    <button
      className={cls.join(' ')}
      onClick={(e) => {
        e.stopPropagation()
        props.toggleFavourite(props.contacts, props.id)
      }}
    >
      {
        props.favorite
          ? <FontAwesomeIcon icon={fasStar}/>
          : <p className={classes.notFavourite}>
            <span className={classes.common}>
              <FontAwesomeIcon icon={farStar}/>
            </span>

            <span className={classes.gold}>
              <FontAwesomeIcon icon={fasStar}/>
            </span>
          </p>
      }
    </button>
  )
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavourite: (contacts, id) => dispatch(toggleFavourite(contacts, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton)