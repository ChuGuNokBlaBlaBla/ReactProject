import { connect } from 'react-redux';
import { newPost } from '../../../../../redux/authReducer';
import SendPost from '../SendPost';

const mapStateToProps = (state) => {
    return {
        valuePost: state.profilePage.valueTextPost
    }
}

const ContainerMyPosts = connect(mapStateToProps, { newPost })(SendPost);

export default ContainerMyPosts;