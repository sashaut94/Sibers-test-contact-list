import React, {useEffect, useRef} from 'react'
import classes from './PerPage.module.scss'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import {setCurrentPage, setPerPageAmount, setPerPageState} from '../../store/actionCreator'
import {Button} from '../Button/Button'
import {CSSTransition} from 'react-transition-group'

const perPages = [3, 6, 9, 12]

function useOutsideAlerter(ref, condition, fn) {
  useEffect(() => {
    if (condition) {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          fn(true)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [ref, condition, fn])
}

const PerPage = props => {
  const ref = useRef(null)
  useOutsideAlerter(ref, props.perPage, props.setPerPageState)
  return (
    <div className={classes.PerPage}>
      <span className={classes.text}>
        Per page
      </span>
      <div className={classes.wrapper} ref={ref}>
        <Button
          type='perPage'
          onClick={() => props.setPerPageState(props.perPage)}
        >
          {props.amountPerPage}
          <FontAwesomeIcon icon={faChevronDown}
                           className={`${classes.arrow} ${props.perPage ? classes.open : null}`}/>
        </Button>

        <CSSTransition
          in={props.perPage}
          timeout={1000}
          classNames='dropdown'
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.dropdown}>
            <ul className={classes.list}>
              {
                perPages.map(perPage => (
                  <li
                    key={perPage}
                    className={`${classes.item} ${props.amountPerPage === perPage ? classes.active : null}`}
                    onClick={() => {
                      props.setPerPageAmount(perPage)
                      props.setPerPageState(true)
                      props.setCurrentPage(1)
                    }}
                  >
                    {perPage}
                  </li>
                ))
              }
            </ul>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    perPage: state.perPage,
    amountPerPage: state.amountPerPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPerPageState: (state) => dispatch(setPerPageState(state)),
    setPerPageAmount: (number) => dispatch(setPerPageAmount(number)),
    setCurrentPage: (number) => dispatch(setCurrentPage(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PerPage)