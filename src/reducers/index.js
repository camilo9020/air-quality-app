import { combineReducers } from "redux"

export function search(state={
    items:  [],
    fetching: false,
    fetched: false,
  }, action) {

  switch (action.type) {
    case "FETCH_SEARCH": {
      return {...state, fetching:true}
    }
    case "FETCH_SEARCH_REJECTED": {
      return {...state, fetched: false, error: action.payload}
    }
    case "FETCH_SEARCH_FULFILLED": {
      return {
      ...state,
      fetching: true,
      fetched: true,
      items: [...state.items, action.payload]
      }
    }
    default:
      return state
  }
}

function handleError(state = {
    errors: [],
    fetching: false,
    fetched: true,
  }, action) {

  switch (action.type) {
    case "FETCH_SEARCH_ERROR": {
      return {
        ...state,
        fetching: true,
        fetched: true,
        errors: [...state, { message: action.payload.error.message }]
      }
    }
    case "CLOSE_ERROR": {
      return {
        ...state,
        fetching: false,
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

