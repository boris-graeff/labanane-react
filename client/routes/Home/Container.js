import { connect } from 'react-redux'
import HomeContent from './Content'

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  }
}


const Home = connect(
  mapStateToProps
)(HomeContent)

export default Home