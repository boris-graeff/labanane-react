import { connect } from 'react-redux'
import Content from './Content'

const mapStateToProps = state => {
  return {
    playlist: state.playlist
  }
}

const Playlist = connect(
  mapStateToProps
)(Content)

export default Playlist