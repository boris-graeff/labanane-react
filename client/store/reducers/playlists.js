import {REQUEST_PLAYLISTS, RECEIVE_PLAYLISTS} from '../../actions/actionTypes'

const initialState = {
  isFetching: false,
  items: []
}

function playlists(state = initialState, action) {
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

export default playlists