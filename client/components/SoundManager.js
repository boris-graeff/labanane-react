import React, {Component} from 'react'
import YoutubePlayer from './players/YoutubePlayer'
import SoundcloudPlayer from './players/SoundcloudPlayer'
import {connect} from 'react-redux'

class SoundManager extends Component {
  
  onReady () {
      console.log('onReady')
  }
  
  onProgress () {
    console.log('onProgress')
  }
  
  onTrackEnd () {
    console.log('onTrackEnd')
  }
  
  onError () {
    console.log('onError')
  }

  checkProvider (provider, nextProvider) {
    if (provider !== nextProvider) {
      this._player && this._player.stop()
      
      if (nextProvider === 'youtube') this._player = this._youtubePlayer
      else if (nextProvider === 'soundcloud') this._player = this._soundcloudPlayer
    }
  }

  checkState (state, nextState) {
    if (state !== nextState) {
      if (nextState === 'paused') this._player.pause()
      else if (nextState === 'playing') this._player.play()
    }
  }

  checkVolume (volume, nextVolume) {
    if (volume !== nextVolume) {
      this._youtubePlayer.setVolume(nextVolume)
      this._soundcloudPlayer.setVolume(nextVolume)
    }
  }

  checkTrack (player, nextPlayer) {
    const {track} = player
    const nextTrack = nextPlayer.track

    const hasChanged = track.id !== nextTrack.id
    
    if (hasChanged) {
      this.checkProvider(track.provider, nextTrack.provider)
      this._player.loadAndPlay(nextTrack)
    }

    return hasChanged
  }

  shouldComponentUpdate(nextProps, nextState) {
    const currentPlayer = this.props.player
    const nextPlayer = nextProps.player

    if( !this.checkTrack(currentPlayer, nextPlayer)){
      this.checkState(currentPlayer.state, nextPlayer.state)
      this.checkVolume(currentPlayer.volume, nextPlayer.volume)
    }

    return false
  }

  render () {
    const {onTrackEnd, onProgress, onError, onReady} = this
    
    return (
      <div>
        <YoutubePlayer ref={player => { this._youtubePlayer = player }}
          onTrackEnd={onTrackEnd} onProgress={onProgress} onError={onError} onReady={onReady} >
        </YoutubePlayer>
        
        <SoundcloudPlayer ref={player => { this._soundcloudPlayer = player }}
          onTrackEnd={onTrackEnd} onProgress={onProgress} onError={onError} onReady={onReady} >
        </SoundcloudPlayer>
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
)(SoundManager)