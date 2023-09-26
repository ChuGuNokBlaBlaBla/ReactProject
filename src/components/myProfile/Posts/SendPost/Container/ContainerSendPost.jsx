import { connect } from 'react-redux';
import { changeValuePost, newPost } from '../../../../../redux/profileReducer';
import SendPost from '../SendPost';

const mapStateToProps = (state) => {
    return {
        valuePost: state.profilePage.valueTextPost
    }
}

const ContainerMyPosts = connect(mapStateToProps, { newPost, changeValuePost })(SendPost);

export default ContainerMyPosts;