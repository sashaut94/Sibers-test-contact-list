import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import {reducer} from './store/reducer'
import thunk from 'redux-thunk'
import './animations.scss'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const app = <Provider store={store}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
</Provider>

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();
