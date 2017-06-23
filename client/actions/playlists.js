import api from '../api'

import {REQUEST_PLAYLISTS, RECEIVE_PLAYLISTS} from './actionTypes'

function requestPlaylists() {
  return {
    type: REQUEST_PLAYLISTS
  }
}

function receivePlaylists(playlists) {
  const sortedPlaylists = playlists.sort((a, b) => b.timestamp - a.timestamp)

  return {
    type: RECEIVE_PLAYLISTS,
    playlists: sortedPlaylists
  }
}

function fetchPlaylists() {
  return dispatch => {
    dispatch(requestPlaylists())
    return api.get('/playlists')
      .then(({data}) => dispatch(receivePlaylists(data)))
  }
}

function shouldFetchPlaylists (state) {
  const {playlists} = state
  return !playlists.isFetching
}

export function fetchPlaylistsIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchPlaylists(getState())) {
      return dispatch(fetchPlaylists())
    }
  }
}