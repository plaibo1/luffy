import s from './music.module.sass'
import { connect } from 'react-redux'
import MusicPage from './MusicPage'


const mapStateToProps = (state) => {
    return {
        musicData: state.musicPage.musicData,
    }
}

const mapDispatchToProps = (dispatch) => {
   return null
}

const MusicPageContainer = connect(mapStateToProps, mapDispatchToProps)(MusicPage)

export default MusicPageContainer;