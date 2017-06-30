import {SET_TRACK, PLAY, PAUSE} from './actionTypes'

export const setTrack = (track) => {
  return {
    type: SET_TRACK,
    track
  }
}

export const play = () => {
  return {
    type: PLAY
  }
}

export const pause = () => {
  return {
    type: PAUSE
  }
}