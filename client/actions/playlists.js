import 'whatwg-fetch'

import {REQUEST_PLAYLISTS, RECEIVE_PLAYLISTS} from './actionTypes'

function requestPlaylists() {
  return {
    type: REQUEST_PLAYLISTS
  }
}

function receivePlaylists(playlists) {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists: playlists
  }
}

function fetchPlaylists() {
  return dispatch => {
    dispatch(requestPlaylists())
    return fetch('/services/playlists')
      .then(response => response.json())
      .then(json => dispatch(receivePlaylists(json)))
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