import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
// import { reduxReactRouter } from 'redux-router'
// import createHistory from 'history/lib/createBrowserHistory'
// import {reduxReactFirebase} from 'redux-react-firebase'
import thunkMiddleware from 'redux-thunk'
// import { apiMiddleware } from 'redux-api-middleware'
import apiMiddleware from '../middleware/api'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware, apiMiddleware)
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
