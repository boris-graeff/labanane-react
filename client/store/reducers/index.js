import {combineReducers} from 'redux'
import playlist from './playlist'
import playlists from './playlists'
import player from './player'

const reducers = combineReducers({
  playlists,
  playlist,
  player
})

export default reducers