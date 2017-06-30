import React, {Component} from 'react'
import { connect } from 'react-redux'
import s from './player.pcss'
import {pause, play} from '../../actions/player'

class Player extends Component {

  constructor (props) {
    super(props)

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }

  play () {
    const {dispatch} = this.props
    dispatch(play())

  }

  pause () {
    const {dispatch} = this.props
    dispatch(pause())
  }


  render () {
    const {props, play, pause} = this
    const {player} = props
    const {track} = player

    return (
      <div className={s.player}>
        {track.name}
        <ul>
          <li>
            <button type='button' onClick={play}>Play</button>
          </li>
          <li>
            <button type='button' onClick={pause}>Pause</button>
          </li>
        </ul>
      </div>
    ) 
  }
}

const mapStateToProps = state => {
  return {
    player: state.player
  }
}

export default connect(
  mapStateToProps,
)(Player)