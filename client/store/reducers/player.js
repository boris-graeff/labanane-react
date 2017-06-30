import {SET_TRACK, PLAY, PAUSE} from '../../actions/actionTypes'

const initialState = {
  track: {},
  currentTime: 0,
  shuffle: false,
  videoMode: false,
  volume: 100,
  state: 'stopped'
}

function player(state = initialState, action) {

  switch (action.type) {
    case SET_TRACK:
      return Object.assign({}, state, {
        track: action.track,
        state: 'playing'
      })
      break

    case PLAY:
      return Object.assign({}, state, {
        state: 'playing'
      })
      break

    case PAUSE:

      return Object.assign({}, state, {
        state: 'paused'
      })
      break

    default:
      return state
  }
}

export default player