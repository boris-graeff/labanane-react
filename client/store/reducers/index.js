import {combineReducers} from 'redux'
import playlist from './playlist'
import playlists from './playlists'

const reducers = combineReducers({
  playlists,
  playlist
})

export default reducers