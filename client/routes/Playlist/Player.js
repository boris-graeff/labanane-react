import React, {Component} from 'react'
import { connect } from 'react-redux'
import s from './player.pcss'
import {pause, play, setTrack} from '../../actions/player'
import {getNextTrack, getPreviousTrack} from '../../store/getters/playlist'

class Player extends Component {

  constructor (props) {
    super(props)

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.nextTrack = this.nextTrack.bind(this)
    this.previousTrack = this.previousTrack.bind(this)
  }

  play () {
    const {dispatch} = this.props
    dispatch(play())

  }

  pause () {
    const {dispatch} = this.props
    dispatch(pause())
  }

  nextTrack () {
    const {dispatch, playlist, player} = this.props
    const {tracks} = playlist
    const {track} = player

    dispatch(setTrack(getNextTrack(tracks, track)))
  }

  previousTrack () {
    const {dispatch, playlist, player} = this.props
    const {tracks} = playlist
    const {track} = player

    dispatch(setTrack(getPreviousTrack(tracks, track)))
  }


  render () {
    const {props, play, pause, nextTrack, previousTrack} = this
    const {player} = props
    const {track} = player

    return (
      <div className={s.player}>
        {track.name}
        <ul>
          <li>
            <button type='button' onClick={previousTrack}>Previous</button>
          </li>
          <li>
            <button type='button' onClick={play}>Play</button>
          </li>
          <li>
            <button type='button' onClick={pause}>Pause</button>
          </li>
          <li>
            <button type='button' onClick={nextTrack}>Next</button>
          </li>
        </ul>
      </div>
    ) 
  }
}

const mapStateToProps = state => {
  return {
    playlist: state.playlist,
    player: state.player
  }
}

export default connect(
  mapStateToProps,
)(Player)