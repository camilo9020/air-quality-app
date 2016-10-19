import React from 'react'
import { search, handleError } from '../reducers/index.js'

describe('Search', () => {
  it('should return initial state', () => {
    expect(
      search(undefined, {})
    ).toEqual(
      {
        items: [],
        fetched: false,
        fetching: false,
      }
    )
  })

  it('should fetch items', () => {
    expect(
      search([], {
        type: search.FETCH_SEARCH_FULLFILLED,
        payload: "item QA"
      })
    ).toEqual(
      [
        {
          fetching: true,
          fetched: true,
          items: "item QA",
        }
      ]
    )

  })
})