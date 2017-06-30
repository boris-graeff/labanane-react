import React, {Component} from 'react'
import ListItem from './ListItem'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import s from './track-list-item.pcss'

class TrackListItem extends Component {

  constructor (props) {
    super(props)

    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick () {
    const {handleClick, track} = this.props
    handleClick(track)
  }

  render () {
    const {props, _handleClick} = this
    const {track, index, children, isSelected} = props

    return (
      <ListItem className={classnames(s.trackListItem, s[track.provider], isSelected ? s.selected : '')} handleClick={_handleClick}>
        <span className={s.index}>{index}</span>
        <div>
          {children}
        </div>
      </ListItem>
    )
  }
}

TrackListItem.propTypes = {
  track: PropTypes.object.isRequired,
  index: PropTypes.number,
  isSelected: PropTypes.bool
}

export default TrackListItem