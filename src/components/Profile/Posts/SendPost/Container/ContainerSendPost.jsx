import { connect } from 'react-redux';
import { newPost } from '../../../../../redux/profileReducer';
import SendPost from '../SendPost';
import { getValuePost } from '../../../../../Selectors/selectorProfile';

const mapStateToProps = (state) => {
    return {
        valuePost: getValuePost(state)
    }
}

const ContainerMyPosts = connect(mapStateToProps, { newPost })(SendPost);

export default ContainerMyPosts;