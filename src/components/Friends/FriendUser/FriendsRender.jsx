import React from 'react';
import axios from 'axios';
import Users from './FunctionalСomponent/Users';
import NumberPages from './FunctionalСomponent/NumberPages';
import Preloader from '../../Common/Preloader/Preloader';

class FreindsProfileGet extends React.Component {
    componentDidMount() {
        this.props.isRequested(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then((list) => {
            this.props.getInitialState(list.data)
            this.props.isRequested(false)
        })
    }
    getUsers = (numberPage) => {
        this.props.getNumberPage(numberPage)
        this.props.isRequested(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.count}`).then((list) => {
            this.props.getInitialState(list.data)
            this.props.isRequested(false)
        })
    }
    render() {
        return (
            <div>
                {this.props.requsetStatus === true ? <Preloader/> : null }
                <NumberPages totalCount={this.props.totalCount} count={this.props.count} page={this.props.page} getUsers={this.getUsers} />
                <Users users={this.props.users} message={this.props.message} unfollow={this.props.unfollow} follow={this.props.follow} requestStatus={this.props.requsetStatus} getUsers={this.getUsers} />
                
            </div>
        )
    }
}

export default FreindsProfileGet;