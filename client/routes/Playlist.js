import React, { Component } from 'react'
import {fetchPlaylistIfNeeded} from '../actions/playlist'
import TrackList from './Playlist/TrackList'
import Player from './Playlist/Player'
import SoundManager from '../components/SoundManager'
import {setTrack} from '../actions/player'
import { connect } from 'react-redux'

class Playlist extends Component {

  constructor (props) {
    super(props)

    this.setTrack = this.setTrack.bind(this)
  }

  componentDidMount() {
    const {dispatch, match} = this.props
    const {playlistId} = match.params

    dispatch(fetchPlaylistIfNeeded(playlistId))
  }

  setTrack (track) {
    const {dispatch} = this.props
    dispatch(setTrack(track))
  }

  render() {
    const {setTrack, props} = this
    const {playlist, player} = props
    const currentTrack = player.track

    return (
      <div>
        <div>
          <h1>{playlist.name}</h1>
          <TrackList playlist={playlist} onTrackSelected={setTrack} currentTrack={currentTrack}></TrackList>
          <Player></Player>
        </div>
        <SoundManager></SoundManager>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlist: state.playlist,
    player: state.player
  }
}

export default connect(
  mapStateToProps,
)(Playlist)