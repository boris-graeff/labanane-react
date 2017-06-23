import {SET_TRACK } from './actionTypes'

export const setTrack = (track) => {
  return {
    type: SET_TRACK,
    track
  }
}