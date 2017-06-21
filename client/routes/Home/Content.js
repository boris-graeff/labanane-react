import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {fetchPlaylistsIfNeeded} from '../../actions/playlists'

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
          <li key={playlist.id}>
            <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default HomeContent