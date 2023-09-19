import React from 'react';
import s from './FriendUser.module.css'
import axios from 'axios';
import icon from '../../../assets/icon.png'

class FreindsProfileGet extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then((list) => {
            this.props.getData(list.data)
        })
    }
    renderPageCount = (numberPage) => {
        this.props.getNumPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.count}`).then((list) => {
            this.props.getData(list.data)
        })
    }
    renderCardFrineds = () => {
        if (this.props.users) {
            return (
                this.props.users.map((user => {
                    return (
                        <div key={user.id} className={s.friends_users} id={user.id}>
                            <div className={s.wrap_user_info}>
                                <div className={s.friends_users_photo}>
                                    <img src={user.photos.large === null ? icon : user.photos.large}></img>
                                </div>
                                <div className={s.friends_users_name}>{user.name}</div>
                            </div>
                            <div className={s.message_friends}>{this.props.message}</div>
                            <div className={s.friends_action_menu}>
                                {user.followed === true ? <button onClick={() => this.props.unfollow(user.id)}>Отписаться</button> :
                                    <button onClick={() => { this.props.follow(user.id) }}>Подписаться</button>}
                            </div>
                        </div>
                    )
                }))
            )
        }
        return
    }
    pages = () => {
        let numberPages = Math.ceil(this.props.totalCount / this.props.count)
        let numberPageArr = []
        for (let i = 1; i <= numberPages; i++) {
            numberPageArr.push(i)
        }
        return (
            numberPageArr.map((numberPage)=> {
                return <span className={this.props.page === numberPage ? s.activePage : s.itemPage} onClick={()=> this.renderPageCount(numberPage)}>{numberPage}, </span>
            })
        )
    }
    render() {

        return (
            <div>
                {this.pages()}
                {this.renderCardFrineds()}
                <button onClick={() => { this.renderPageCount() }}>Получить список пользователей</button>
            </div>
        )
    }
}

export default FreindsProfileGet;