import React, {Component} from 'react'
import List from '../../components/List'
import TrackListItem from '../../components/TrackListItem'
import s from './trackList.pcss'

class TrackList extends Component {

  render () {
    const {playlist, onTrackSelected, currentTrack} = this.props

    return (
      <List className={s.trackList}>
        {playlist.tracks.map((track, i) => (
          <TrackListItem key={track.id} track={track} index={i} handleClick={onTrackSelected} isSelected={currentTrack.id === track.id}>
            {track.name}
          </TrackListItem>
        ))}
      </List>
    )
  }
}

export default TrackList