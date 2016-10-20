import { combineReducers } from "redux"
import * as types from '../constants/ActionTypes.js'

export function search(state={
    items:  [],
    fetching: false,
    fetched: false,
  }, action) {

  switch (action.type) {
    case types.FETCH_SEARCH: {
      return {...state, fetching:true}
    }
    case types.FETCH_SEARCH_REJECTED: {
      return {...state, fetched: false, fetching: false, error: action.payload}
    }
    case types.FETCH_SEARCH_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: [...state.items, action.payload]
      }
    }
    default:
      return state
  }
}

const initialState = [
  {
    errors: [],
    fetched: false,
  }
]

export function handleError(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SEARCH_ERROR: {
      return {
        ...state,
        fetched: true,
        errors: [...state, { message: action.payload.error.message }]
      }
    }
    case types.CLOSE_ERROR: {
      return {
        ...state,
        fetched: false,
        errors: []
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  search,
  handleError
})

