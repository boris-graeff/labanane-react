import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './routes/Home'
import Playlist from './routes/Playlist'

export default class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/playlist/:playlistId/:trackId?' component={Playlist} />
            <Route exact path='/' component={Home} />
            <Redirect from='*' to ='/' />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}