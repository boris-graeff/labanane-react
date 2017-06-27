import {REQUEST_PLAYLIST, RECEIVE_PLAYLIST} from '../../actions/actionTypes'

const initialState = {
  isFetching: false,
  name: '',
  tracks: []
}

function playlist(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      const {name, tracks} = action.playlist
      return Object.assign({}, state, {
        isFetching: false,
        name,
        tracks
      })
    case REQUEST_PLAYLIST:
      return Object.assign({}, state, {
        isFetching: true
      })
    default:
      return state
  }
}

export default playlist