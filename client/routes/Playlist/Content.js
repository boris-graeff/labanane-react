import React, { Component } from 'react'
import {fetchPlaylistIfNeeded} from '../../actions/playlist'
import TrackList from './components/TrackList'
import Player from './components/Player'
import {setTrack} from '../../actions/player'

class HomeContent extends Component {

  constructor (props) {
    super(props)

    this.setTrack = this.setTrack.bind(this)
  }

  componentDidMount() {
    const {dispatch, match} = this.props
    const {playlistId} = match.params

    dispatch(fetchPlaylistIfNeeded(playlistId))
  }

  setTrack (event, track) {
    const {dispatch} = this.props
    dispatch(setTrack(track))
  }

  render() {
    const {setTrack, props} = this
    const {playlist, player} = props

    return (
      <div>
        <h1>{playlist.name}</h1>
        <TrackList playlist={playlist} onTrackSelected={setTrack}></TrackList>
        <Player player={player}></Player>
      </div>
    )
  }
}

export default HomeContent