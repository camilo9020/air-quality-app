import React from 'react'
import { search, handleError } from '../reducers/index.js'
import * as types from '../constants/ActionTypes.js'

describe('Search reducer', () => {
  let state={
    items:  [],
    fetching: false,
    fetched: false,
  }

  it('should return initial state', () => {
    expect(
      search(state, {})
    ).toEqual(
      {
        items: [],
        fetched: false,
        fetching: false,
      }
    )
  })

  it('should return correct state after FETCH_SEARCH action type', () => {
    expect(
      search(state, {
        type: types.FETCH_SEARCH
      })
    ).toEqual(
      {
        fetched: false,
        fetching: true,
        items: []
      }
    )
   })

  it('it should return correct state after FETCH_SEARCH_REJECTED action type', () => {
    expect(
      search(state, {
        type: types.FETCH_SEARCH_REJECTED,
        payload: "error",
      })
    ).toEqual(
      {
        fetched: false,
        fetching: false,
        items: [],
        error: "error"
      }
    )
  })

  it('it should return correct state after FETCH_SEARCH_FULFILLED action type', () => {
    expect(
      search(state, {
        type: types.FETCH_SEARCH_FULFILLED,
        payload: "item"
      })
      ).toEqual(
        {
          ...state,
          fetching: false,
          fetched: true,
          items: ["item"]
        }
      )
  })

})

describe('handleError reducer', () => {

  it('should return initial state', () => {
    expect(
      handleError(undefined, {})
    ).toEqual(
      [
        {
          errors: [],
          fetched: false,
        }
      ]
    )
  })

  it('should return correct state after FETCH_SEARCH_ERROR', () => {
    expect(
      handleError([], {
        type: types.FETCH_SEARCH_ERROR,
        payload: { error: { message: "location don't supported"}}
      })
    ).toEqual(
      {
        fetched: true,
        errors: [ { message: "location don't supported"}]
      }
    )
  })

  it('should return correct state after CLOSE_ERROR', () => {
    expect(
      handleError([], {
        type: types.CLOSE_ERROR
      })
    ).toEqual(
      {
        fetched: false,
        errors: []
      }
    )
  })
})