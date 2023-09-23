import { connect } from 'react-redux';
import { getInitialState, getNumberPage, isRequested, follow, unfollow } from '../../redux/friendsReducer';
import FriendsRender from './FriendUser/FriendsRender';

const mapStateToProps = (state) => {
    return {
        users: state.friends.items,
        totalCount: state.friends.totalCount,
        page: state.friends.page,
        count: state.friends.count,
        requsetStatus: state.friends.isRequested,
    }
}
const ContainerFriendsRender = connect(mapStateToProps, { getInitialState, follow, unfollow, getNumberPage, isRequested })(FriendsRender)
export default ContainerFriendsRender
