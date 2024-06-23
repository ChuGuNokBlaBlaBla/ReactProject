import { connect } from 'react-redux';
import { getListUsers, unfollow, follow } from '../../redux/friendsReducer';
import FriendsRender from './FriendUser/FriendsRender';
import { withAuthRedirect } from '../../hoc/withAuthReducer';
import { compose } from 'redux';
import { getUsers, getTotalCount, getPage, getCount, getRequsetStatus, getFollowedProgress } from '../../Selectors/selectorFriends';

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        page: getPage(state),
        count: getCount(state),
        requsetStatus: getRequsetStatus(state),
        followedProgress: getFollowedProgress(state)
    }
}
export default compose(
    connect(mapStateToProps, { getListUsers, follow, unfollow }),
    withAuthRedirect
)
(FriendsRender)