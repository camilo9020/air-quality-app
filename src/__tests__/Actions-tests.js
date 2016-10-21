import configureMockStore from "redux-mock-store"
import * as actions from "../actions/searchActions"
import * as types from '../constants/ActionTypes'

import thunk from "redux-thunk"
import nock from 'nock'
import moxios from 'moxios'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe("async actions", () => {

  beforeEach(function () {
     moxios.install()
   })

   afterEach(function () {
     moxios.uninstall()
   })

   it("fetch items successfully after SEARCH", () => {
    moxios.stubRequest('https://api.breezometer.com/baqi/?location=Nueva+York,+Estados+Unidos&key=075ad8e8766a4096a8e8029b4b142108', {
      status: 200,
      responseText: JSON.stringify({ items: ["do something"] })
    })
    const expectedActions = [
          { type: types.FETCH_SEARCH },
          { type: types.FETCH_SEARCH_FULFILLED, payload: {"country_name": "Nueva York, Estados Unidos", "items": ["do something"]} }
        ]

    const store = mockStore({ item: []}, expectedActions)

    return store.dispatch(actions.search("Nueva York, Estados Unidos")).then((response) => {
        expect(store.getActions()).toEqual(expectedActions);
      })
   })
})

