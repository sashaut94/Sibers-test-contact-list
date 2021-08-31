import React from 'react'
import classes from './SearchInput.module.scss'
import {connect} from 'react-redux'
import {faTimes, faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {setCurrentPage, setSearch} from '../../store/actionCreator'

const SearchInput = props => {
  return (
    <div className={classes.SearchInput}>
      <p className={classes.wrapper}>
        <button
          className={`${classes.magnifier} ${classes.button}`}
          disabled
        >
          <FontAwesomeIcon icon={faSearch}/>
        </button>

        <input
          className={classes.input}
          type="text"
          placeholder='Search contacts...'
          value={props.search}
          onChange={e => {
            props.setSearch(e.target.value)
            props.setCurrentPage(1)
          }}
        />

        <button
          className={`${classes.times} ${classes.button}`}
          onClick={() => props.setSearch('')}
          disabled={props.search === ''}
        >
          <FontAwesomeIcon icon={faTimes}/>
        </button>
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSearch: (value) => dispatch(setSearch(value)),
    setCurrentPage: (number) => dispatch(setCurrentPage(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)