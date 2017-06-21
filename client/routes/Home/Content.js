import React, { Component } from 'react'
import {fetchPlaylistsIfNeeded} from '../../actions'

class HomeContent extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchPlaylistsIfNeeded())
  }

  render() {
    const {playlists} = this.props

    return (
      <ul>
        {playlists.items.map(playlist => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    )
  }
}

export default HomeContent