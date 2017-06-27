import {SET_TRACK} from '../../actions/actionTypes'

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
    default:
      return state
  }
}

export default player