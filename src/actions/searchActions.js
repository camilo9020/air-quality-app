import axios from 'axios'

export const search = (place) => {

  const AIR_API = "https://api.breezometer.com/baqi/?location=" + place.replace(/ /g,"+") + "&key=075ad8e8766a4096a8e8029b4b142108"

  return (dispatch) => {
    dispatch({
      type: "FETCH_SEARCH"
    })
    return axios.get(AIR_API).then((response) => {
      if ( "error" in response.data ) {
       dispatch({type: "FETCH_SEARCH_ERROR", payload: response.data})
      }
      else {
       response.data['country_name'] = place
       dispatch({type: "FETCH_SEARCH_FULFILLED", payload: response.data})
      }
    })
    .catch((err) => {
      dispatch({type: "FETCH_SEARCH_REJECTED", payload: err})
        })
  }
}

export const closeError = () => (dispatch) => {
  dispatch({type: "CLOSE_ERROR"})
}
