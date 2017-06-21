import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reducers from './reducers'
import { createStore } from 'redux'

let store = createStore(reducers)

ReactDOM.render(<App store={store} />, document.getElementById('root'))