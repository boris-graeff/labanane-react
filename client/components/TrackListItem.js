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

  _handleClick (event) {
    const {props} = this
    const {handleClick, track} = props
    handleClick(event, track)
  }

  render () {
    const {props, _handleClick} = this
    const {track, index, children} = props

    return (
      <ListItem className={classnames(s.trackListItem, track.provider)} handleClick={_handleClick}>
        <span className='index'>{index}</span>
        <div>
          {children}
        </div>
      </ListItem>
    )
  }
}

TrackListItem.propTypes = {
  track: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TrackListItem