import api from '../api'

import {REQUEST_PLAYLIST, RECEIVE_PLAYLIST} from './actionTypes'

function requestPlaylist() {
  return {
    type: REQUEST_PLAYLIST
  }
}

function receivePlaylist(playlist) {
  return {
    type: RECEIVE_PLAYLIST,
    playlist: playlist
  }
}

function fetchPlaylist(playlistId) {
  return dispatch => {
    dispatch(requestPlaylist())
    return api.get(`/playlists/${playlistId}`)
      .then(({data}) => dispatch(receivePlaylist(data)))
  }
}


function shouldFetchPlaylist (state) {
  const {playlist} = state
  return !playlist.isFetching
}

export function fetchPlaylistIfNeeded (playlistId) {
  return (dispatch, getState) => {
    if (shouldFetchPlaylist(getState())) {
      return dispatch(fetchPlaylist(playlistId))
    }
  }
}

export function createPlaylist (playlist) {
  return api.post('/playlists', playlist)
}