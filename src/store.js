import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers'
import { loadState } from './localStorage'

const middleware = applyMiddleware(promise(), thunk, logger())

const persistedState = loadState()

export default createStore(reducer, persistedState, middleware)
