import React, { useEffect } from 'react';
import axios from 'axios';
import Users from './FunctionalСomponent/Users';
import NumberPages from './FunctionalСomponent/NumberPages';
import Preloader from '../../Common/Preloader/Preloader';

const FriendsRender = (props) => {

    useEffect(() => {
        props.isRequested(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.page}&count=${props.count}`).then((list) => {
            props.getInitialState(list.data)
            props.isRequested(false)
        })
    }, [])

    const getUsers = (numberPage) => {
        props.getNumberPage(numberPage)
        props.isRequested(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${props.count}`).then((list) => {
            props.getInitialState(list.data)
            props.isRequested(false)
        })
    }

    return (
        <div>
            {props.requsetStatus === true ? <Preloader /> : null}
            <NumberPages totalCount={props.totalCount} count={props.count} page={props.page} getUsers={getUsers} />
            <Users users={props.users} message={props.message} unfollow={props.unfollow} follow={props.follow} requestStatus={props.requsetStatus} getUsers={getUsers} />

        </div>
    )

}

export default FriendsRender;