import {combineReducers} from 'redux'
import {REQUEST_PLAYLISTS, RECEIVE_PLAYLISTS} from './actionTypes'

const initialState = {
  playlists: {
    isFetching: false,
    items: []
  }
}

function playlists(state = initialState.playlists, action) {
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.playlists
      })
    case REQUEST_PLAYLISTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    default:
      return state
  }
}
const rootReducer = combineReducers({
  playlists
})

export default rootReducer