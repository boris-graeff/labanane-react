import React from 'react'
import Player from './Player'
import soundcloud from 'soundcloud'
import {SOUNDCLOUD_KEY} from '../../constants'

class SoundcloudPlayer extends Player {

  componentDidMount() {
    soundcloud.initialize({
      client_id: SOUNDCLOUD_KEY
    })
    
    this.props.onReady()
  }
  
  play () {
    this.player.play()
  }

  pause () {
    this.player.pause()
  }
  
  stop () {
    this.player.dispose()
  }

  setVolume (volume) {
    this.player.setVolume(volume / 100)
  }

  seekTo (time) {
    this.player.seek(time)
  }
  
  loadAndPlay (track, volume) {
    const {props} = this

    soundcloud.stream(`/tracks/${track.providerId}`)
      .then(player => {
        // Fixes chrome issue  https://github.com/soundcloud/soundcloud-javascript/issues/39
        if (player.options.protocols[0] === 'rtmp') {
          player.options.protocols.splice(0, 1)
        }

        this.player = player

        player.on('time', function () {
          props.onProgress(this.currentTime())
        })

        player.on('finish', () => props.onTrackEnd())

        this.play()
      })
      .catch(() => {
        props.onError()
      })
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default SoundcloudPlayer