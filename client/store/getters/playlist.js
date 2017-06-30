
export const getNextTrack = (tracks, currentTrack) => {
  const nextTrackIndex = tracks.findIndex(track => track.id === currentTrack.id) + 1
  return tracks[nextTrackIndex >= tracks.length ? 0 : nextTrackIndex]
}

export const getPreviousTrack = (tracks, currentTrack) => {
  const previousTrackIndex = tracks.findIndex(track => track.id === currentTrack.id) - 1
  return tracks[previousTrackIndex <  0 ? tracks.length -1 : previousTrackIndex]
}