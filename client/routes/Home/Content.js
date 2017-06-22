import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {fetchPlaylistsIfNeeded} from '../../actions/playlists'
import s from './style.pcss'
import List from '../../components/List'
import ListItem from '../../components/ListItem'

class HomeContent extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchPlaylistsIfNeeded())
  }

  render() {
    const {playlists} = this.props

    return (
      <List>
        {playlists.items.map(playlist => (
          <ListItem key={playlist.id}>
            <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default HomeContent