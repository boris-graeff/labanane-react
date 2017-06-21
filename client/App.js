import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './routes/Home/Container'
import Playlist from './routes/Playlist'

import configureStore from './configureStore'
const store = configureStore()

const App = () =>  (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/playlist/:playlistId/:trackId?' component={Playlist} />
        <Route exact path='/' component={Home} />
        <Redirect from='*' to ='/' />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App