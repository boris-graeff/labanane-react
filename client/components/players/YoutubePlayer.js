import React from 'react'
import Player from './Player'
import youtube from 'youtube-player'

class YoutubePlayer extends Player {
  componentDidMount() {
    this.player = youtube('youtube-player', {
      height: '100%',
      width: '100%',
      playerVars: {
        modestbranding: 1,
        showinfo: 0,
        controls: 0
      }
    })
    this.player.on('stateChange', this.onStateChange.bind(this))
    this.player.on('ready', this.props.onReady)
    this.player.on('error', this.props.onError)
  }

  onStateChange (event) {
    const YT = window.YT

    if (event.data === YT.PlayerState.PLAYING) {
      this.play()

      this.timer = setInterval(() => {
        this.player.getCurrentTime()
          .then(value => this.props.onProgress(value * 1000))
      }, 1000)
    }
    else {
      this.clearTimer()

      if (event.data === 0) {
        this.props.onTrackEnd()
      }
    }
  }

  clearTimer () {
    clearInterval(this.timer)
    this.timer = null
  }

  play () {
    this.player.playVideo()
  }

  pause () {
    this.player.pauseVideo()
  }

  stop () {
    this.player.stopVideo()
  }

  setVolume (volume) {
    this.player.setVolume(volume)
  }

  seekTo (time) {
    const allowSeekAhead = true
    this.player.seekTo(time / 1000, allowSeekAhead)
    this.props.onProgress(time)
  }

  loadAndPlay (track) {
    this.player.loadVideoById({'videoId': track.providerId})
  }
  
  render () {
    return (
      <div id='youtube-player'></div>
    )
  }
}

export default YoutubePlayer