import {SET_PLAYLISTS} from './actionTypes'

const initialState = {
  playlists: ['P1', 'P2', 'P3']
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_PLAYLISTS:
      return Object.assign({}, state, {
        playlists: action.playlists
      })
    default:
      return state
  }
}

export default reducer