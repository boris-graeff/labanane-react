import React, { Component } from 'react'
import {fetchPlaylistIfNeeded} from '../actions/playlist'
import TrackList from './Playlist/TrackList'
import Player from './Playlist/Player'
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
    const {playlist} = props

    return (
      <div>
        <h1>{playlist.name}</h1>
        <TrackList playlist={playlist} onTrackSelected={setTrack}></TrackList>
        <Player></Player>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlist: state.playlist
  }
}

export default connect(
  mapStateToProps,
)(Playlist)