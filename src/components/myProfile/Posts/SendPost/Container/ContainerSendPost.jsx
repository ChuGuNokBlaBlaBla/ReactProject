import { connect } from 'react-redux';
import { changeText, newPost } from '../../../../../redux/profileReducer';
import SendPost from '../SendPost';

const mapStateToProps = (state) => {
    return {
        valuePost: state.profilePage.valueTextPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(newPost()),
        changeValuePost: (e) => {
            let textPost = e.target.value
            dispatch(changeText(textPost))
        }
    }
}

const ContainerMyPosts = connect(mapStateToProps, mapDispatchToProps)(SendPost);

export default ContainerMyPosts;