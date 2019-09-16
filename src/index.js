import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getAllIcecreams } from './actions'
import App from './containers/App'
import reducer from './reducers'
const middleware = [ thunk ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllIcecreams())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
