import React, { Component } from 'react'

const HomeContent = ({ playlists }) => (
  <ul>
    {playlists.map(playlist => (
      <li key={playlist}>{playlist}</li>
    ))}
  </ul>
)

export default HomeContent