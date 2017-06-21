import React, { Component } from 'react'
import {fetchPlaylistIfNeeded} from '../../actions/playlist'

class HomeContent extends Component {

  componentDidMount() {
    const {dispatch, match} = this.props
    const {playlistId} = match.params

    dispatch(fetchPlaylistIfNeeded(playlistId))
  }

  render() {
    const {playlist} = this.props

    return (
      <h1>{playlist.content.name}</h1>
    )
  }
}

export default HomeContent