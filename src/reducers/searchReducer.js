export default function reducer(state={
    items: JSON.parse(localStorage.getItem('items')) || [],
    errors: [],
    fetching: false,
    fetched: false,

  }, action) {

  switch (action.type) {
    case "FETCH_SEARCH": {
      return {...state, fetching:true, place: action.payload}
    }
    case "FETCH_SEARCH_REJECTED": {
      return {...state, fetched: false, error: action.payload}
    }
    case "FETCH_SEARCH_FULFILLED": {
      console.log("Success response")
      return {
      ...state,
      fetching: true,
      fetched: true,
      items: [...state.items, action.payload]
      }
    }
    case "FETCH_SEARCH_ERROR": {
      console.log(action.payload.error.message)
      return {
        ...state,
        fetching: true,
        fetched: true,
        errors: [...state, { message: action.payload.error.message }]
      }

    }
  }
  return state
}