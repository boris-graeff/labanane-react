import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {fetchPlaylistsIfNeeded} from '../../actions/playlists'
import s from './home.pcss'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import CreateForm from './components/CreateForm'

class HomeContent extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchPlaylistsIfNeeded())
  }

  render() {
    const {playlists} = this.props

    return (
      <main className={s.home}>
        <div className={s.create}>
          <h1>LaBanane</h1>
          <CreateForm></CreateForm>
        </div>
        <List className={s.explore}>
          {playlists.items.map(playlist => (
            <ListItem key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </ListItem>
          ))}
        </List>
      </main>
    )
  }
}

export default HomeContent