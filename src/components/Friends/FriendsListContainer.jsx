import { connect } from 'react-redux';
import { followAC, getInitialState, unfollowAC } from '../../redux/friendsReducer';
import FreindsProfileGet from './FriendUser/FriendProfile';

const mapStateToProps = (state) => {
    return {
        users: state.friends.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (list) => {
            dispatch(getInitialState(list))
        },
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        }
    }
}

const FrinedsListContainer = connect(mapStateToProps, mapDispatchToProps)(FreindsProfileGet)

export default FrinedsListContainer