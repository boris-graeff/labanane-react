import {REQUEST_PLAYLISTS, RECEIVE_PLAYLISTS} from '../../actions/actionTypes'

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

export default playlists