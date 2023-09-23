import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../../redux/friendsReducer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import s from '../Friends.module.css'
import Preloader from '../../Common/Preloader/Preloader';
import icon from '../../../assets/icon.png'

const mapStateToProps = (state) => {
    return {
        activeUser: state.friends.activeUser
    }
}

const ContainerProfileFriend = (props) => {

    let paramsId = useParams()
    useEffect(() => { axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${paramsId.id}`).then((list) => props.setUser(list.data)) }, [])

    return (
        props.activeUser === null ? <Preloader /> :
            <div className={s.content}>
                <div className={s.backMyProfile}>
                    <img src="https://celes.club/uploads/posts/2022-06/1654385293_3-celes-club-p-oboi-na-rabochii-stol-dlya-programmistov-k-3.png" />
                </div>
                <div className={s.wrapAboutMe}>
                    <div className={s.myPhoto}>
                        <img src={props.activeUser.photos.large || icon} />
                    </div>
                    <div className={s.profileInfo}>
                        <h2 className={s.profileInfoName}>{props.activeUser.fullName}</h2>
                        <p> {props.activeUser.lookingForAJob || 'В поиске новых знаний'}</p>
                        <p>Мой статус: {props.activeUser.aboutMe}</p>
                        <p>Мой ID: {props.activeUser.userId}</p>
                        <p>Связь со мной: {props.activeUser.contacts.facebook} {props.activeUser.contacts.twitter} {props.activeUser.contacts.instagram}</p>
                    </div>
                </div>
            </div>
    )
}

export default connect(mapStateToProps, { setUser })(ContainerProfileFriend)