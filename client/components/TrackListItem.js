import React from 'react'
import ListItem from './ListItem'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import s from './track-list-item.pcss'

const TrackListItem = (props) => {
  const {track, index, children} = props
  return (
    <ListItem className={classnames(s.trackListItem, track.provider)}>
      <span className='index'>{index}</span>
      <div>
        {children}
      </div>
    </ListItem>
  )
}

TrackListItem.propTypes = {
  track: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TrackListItem