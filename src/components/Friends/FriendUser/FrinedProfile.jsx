import s from './FriendUser.module.css'

const FreindsProfileGet = (props)=> {
    return (
            <div className={s.friends_users} id={props.id}>
                <div className={s.wrap_user_info}>
                    <div className={s.friends_users_photo}>
                        <img src={props.src}></img>
                    </div>
                    <div className={s.friends_users_name}>{props.name}</div>
                </div>
                <div className={s.message_friends}>{props.message}</div>
                <div className={s.friends_action_menu}>x</div>
            </div>
        )
}

export default FreindsProfileGet;