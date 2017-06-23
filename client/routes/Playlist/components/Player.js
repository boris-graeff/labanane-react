import React, {Component} from 'react'
import s from './player.pcss'

class Player extends Component {
  
  render () {
    const {player} = this.props
    const {track} = player
    return (
      <div className={s.player}>
        {track.name}
      </div>
    ) 
  }
}

export default Player