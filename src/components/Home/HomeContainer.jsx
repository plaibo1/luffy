import { connect } from 'react-redux';
import { addPostActionCreator, likeUpActionCreator, updatePostOnChangeActionCreator } from '../../Redux/homePage-reducer';
import Home from './Home.jsx';


const mapStateToProps = (state) => {
    return {
        friends: state.homePage.friends,
        textareaValue: state.homePage.textareaValue,
        postData: state.homePage.postData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostOnChange: (text) => {
            dispatch(updatePostOnChangeActionCreator(text));
        },
        likeUp: () => {
            dispatch(likeUpActionCreator())
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)



export default HomeContainer;