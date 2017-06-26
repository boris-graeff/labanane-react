import React, {Component} from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = state => {
  return {
    player: state.player
  }
}

export default connect(
  mapStateToProps,
)(Player)