import React, { Component } from 'react'
import {fetchPlaylistIfNeeded} from '../../actions/playlist'
import List from '../../components/List'
import ListItem from '../../components/ListItem'

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
          {playlist.tracks.map(track => (
            <ListItem key={track.id}>
              {track.name}
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default HomeContent