import React from 'react'
import classes from './PaginationList.module.scss'
import {connect} from 'react-redux'
import {Button} from '../Button/Button'
import {setCurrentPage} from '../../store/actionCreator'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const PaginationList = props => {
  const pagination = []
  const amount = Math.ceil(props.amount / props.amountPerPage)
  for (let i = props.currentPage - 2; i < props.currentPage + 3; i++) {
    if (i > 0 && i < amount + 1) pagination.push(i)
  }
  return (
    <div className={classes.PaginationList}>
      {
        props.currentPage !== 1 && <Button
          type='oval'
          block='begin'
          onClick={() => props.setCurrentPage(1)}
        >
          To the begin
        </Button>
      }

      <div className={classes.numbers}>
        {
          pagination.map((number, index) => {
            return <Button
              block='pagination'
              key={index}
              active={props.currentPage === number}
              disabled={props.currentPage === number}
              type={(number === 1 || number === props.currentPage - 2) ? 'roundLeft' : number === amount && props.currentPage === amount ? 'roundRight' : null}
              onClick={() => {
                props.setCurrentPage(number)
              }}
            >
              {number}
            </Button>
          })
        }

        {
          props.currentPage !== amount && <Button
            type='roundRight'
            block='nextPage'
            onClick={() => props.setCurrentPage(props.currentPage + 1)}
          >
            <FontAwesomeIcon icon={faArrowRight}/>
          </Button>
        }
      </div>

      {
        props.currentPage !== amount && <Button
          type='oval'
          block='end'
          onClick={() => props.setCurrentPage(amount)}
        >
          To the end
        </Button>
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    amountPerPage: state.amountPerPage,
    currentPage: state.currentPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentPage: number => {
      dispatch(setCurrentPage(number))
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList)