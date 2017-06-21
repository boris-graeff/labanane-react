import {REQUEST_PLAYLIST, RECEIVE_PLAYLIST} from '../../actions/actionTypes'

const initialState = {
  playlist: {
    isFetching: false,
    content: {}
  }
}

function playlist(state = initialState.playlist, action) {
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, {
        isFetching: false,
        content: action.playlist
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