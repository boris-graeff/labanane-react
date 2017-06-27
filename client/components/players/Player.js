import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Player extends Component {
}

Player.propTypes = {
  onTrackEnd: PropTypes.func.isRequired,
  onProgress: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onReady: PropTypes.func.isRequired
}

export default Player