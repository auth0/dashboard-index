import 'babel-polyfill'

import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import Dashboard from './containers/Dashboard'
import configure from './store'
import routes from './routes'

import styles from './index.styl'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history}>
    </Router>
  </Provider>,
  document.getElementById('root')
)
