import React, { Component } from 'react'
import {fetchPlaylistIfNeeded} from '../../actions/playlist'
import List from '../../components/List'
import TrackListItem from '../../components/TrackListItem'

class HomeContent extends Component {

  componentDidMount() {
    const {dispatch, match} = this.props
    const {playlistId} = match.params

    dispatch(fetchPlaylistIfNeeded(playlistId))
  }

  render() {
    const {playlist} = this.props

    return (
      <div>
        <h1>{playlist.name}</h1>
        <List>
          {playlist.tracks.map((track, i) => (
            <TrackListItem key={track.id} track={track} index={i}>
              {track.name}
            </TrackListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default HomeContent