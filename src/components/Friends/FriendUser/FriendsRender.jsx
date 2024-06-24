import React, { useEffect } from 'react';
import Users from './FunctionalСomponent/Users';
import NumberPages from './FunctionalСomponent/NumberPages';
import Preloader from '../../Common/Preloader/Preloader';
import { getUsers, getTotalCount, getPage, getCount, getRequsetStatus, getFollowedProgress } from '../../../Selectors/selectorFriends';
import { connect } from 'react-redux';
import { getListUsers, follow, unfollow } from '../../../redux/friendsReducer';

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

const FriendsRender = (props) => {

    useEffect(() => {
        props.getListUsers(props.page, props.count)
    }, [])

    const getUsers = (numberPage) => {
        props.getListUsers(numberPage, props.count)
    }

    return (
        <div>
            {props.requsetStatus === true ? <Preloader /> : null}
            <NumberPages getPages={props} getUsers={getUsers} />
            <Users controlListUsers={props} getUsers={getUsers} />
        </div>
    )

}

export default connect(mapStateToProps, {getListUsers, follow, unfollow} )(FriendsRender);