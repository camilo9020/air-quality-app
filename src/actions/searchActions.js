import axios from 'axios'
import * as types from '../constants/ActionTypes.js'

export const search = (place) => {

  const AIR_API = "https://api.breezometer.com/baqi/?location=" + place.replace(/ /g,"+") + "&key=075ad8e8766a4096a8e8029b4b142108"

  return (dispatch) => {
    dispatch({
      type: types.FETCH_SEARCH
    })
    return axios.get(AIR_API).then((response) => {
      if ( "error" in response.data ) {
       dispatch({type: types.FETCH_SEARCH_ERROR, payload: response.data})
      }
      else {
       response.data['country_name'] = place
       dispatch({type: types.FETCH_SEARCH_FULFILLED, payload: response.data})
      }
    })
    .catch((err) => {
      dispatch({type: types.FETCH_SEARCH_REJECTED, payload: err})
        })
  }
}

export const closeError = () => (dispatch) => {
  dispatch({type: types.CLOSE_ERROR})
}
