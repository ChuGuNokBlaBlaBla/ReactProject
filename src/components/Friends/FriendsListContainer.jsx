import { connect } from 'react-redux';
import { followAC, getInitialStateAC, numPageAC, unfollowAC } from '../../redux/friendsReducer';
import FreindsProfileGet from './FriendUser/FriendsRender';

const mapStateToProps = (state) => {
    return {
        users: state.friends.items,
        totalCount: state.friends.totalCount,
        page: state.friends.page,
        count: state.friends.count,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (list) => {
            dispatch(getInitialStateAC(list))
        },
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        getNumPage: (numberPage)=> {
            dispatch(numPageAC(numberPage))
        }
    }
}

const FrinedsListContainer = connect(mapStateToProps, mapDispatchToProps)(FreindsProfileGet)

export default FrinedsListContainer