import React, {Component} from 'react'
import List from '../../../components/List'
import TrackListItem from '../../../components/TrackListItem'
import s from './trackList.pcss'

class TrackList extends Component {

  render () {
    const {playlist, onTrackSelected} = this.props

    return (
      <List className={s.trackList}>
        {playlist.tracks.map((track, i) => (
          <TrackListItem key={track.id} track={track} index={i} handleClick={onTrackSelected}>
            {track.name}
          </TrackListItem>
        ))}
      </List>
    )
  }
}

export default TrackList