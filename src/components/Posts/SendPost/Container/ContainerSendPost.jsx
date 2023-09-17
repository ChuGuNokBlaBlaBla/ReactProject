import { connect } from 'react-redux';
import { changeText, newPost } from '../../../../redux/profileReducer';
import SendPost from '../SendPost';
import store from '../../../../redux/store-redux';

const mapStateToProps = (state) => {
    return {
        valuePost: state.profilePage.valueTextPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let textPost = store.getState().profilePage.valueTextPost
            dispatch(newPost(textPost))
        },
        changeValuePost: (e) => {
            let textPost = e.target.value
            dispatch(changeText(textPost))
        }
    }
}

const ContainerMyPosts = connect(mapStateToProps, mapDispatchToProps)(SendPost);

export default ContainerMyPosts;