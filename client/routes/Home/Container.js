import { connect } from 'react-redux'
import Content from './Content'

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  }
}

const Home = connect(
  mapStateToProps
)(Content)

export default Home