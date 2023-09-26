import { connect } from 'react-redux';
import { getListUsers, unfollow, follow } from '../../redux/friendsReducer';
import FriendsRender from './FriendUser/FriendsRender';

const mapStateToProps = (state) => {
    return {
        users: state.friends.items,
        totalCount: state.friends.totalCount,
        page: state.friends.page,
        count: state.friends.count,
        requsetStatus: state.friends.isRequest,
        followedProgress: state.friends.followedProgress
    }
}
const ContainerFriendsRender = connect(mapStateToProps, { getListUsers, follow, unfollow })(FriendsRender)
export default ContainerFriendsRender