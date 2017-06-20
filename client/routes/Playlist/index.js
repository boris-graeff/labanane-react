import React, { Component } from 'react'

export default ({match}) => {
  return (
    <div>Welcome Playlist {match.params.playlistId} !</div>
  )
}