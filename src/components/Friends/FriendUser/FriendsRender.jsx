import React, { useEffect } from 'react';
import Users from './FunctionalСomponent/Users';
import NumberPages from './FunctionalСomponent/NumberPages';
import Preloader from '../../Common/Preloader/Preloader';

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
            <NumberPages totalCount={props.totalCount} count={props.count} page={props.page} getUsers={getUsers} />
            <Users users={props.users}
                getUsers={getUsers}
                followedProgress={props.followedProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />
        </div>
    )

}

export default FriendsRender;