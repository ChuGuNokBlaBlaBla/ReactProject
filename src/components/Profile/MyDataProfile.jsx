import React from 'react';
import s from './ProfileBlock.module.css'
import Preloader from '../Common/Preloader/Preloader';
import StatusProfile from './StatusProfle';

const MyDataProfile = (props) => {
    return (
        props.dataUser === null ? <Preloader /> :
            <div className={s.content}>
                <div className={s.backMyProfile}>
                    <img src="https://olimpstroyservis.ru/images/companies/1/KD/foto-1-1.jpg" />
                </div>
                <div className={s.wrapAboutMe}>
                    <div className={s.myPhoto}>
                        <img src={props.dataUser.photos.large} />
                    </div>
                    <div className={s.profileInfo}>
                        <div><h2 className={s.profileInfoName}>{props.dataUser.fullName}</h2></div>
                        <div><p>Дата рождения: 07.09.1999</p></div>
                        <div><p>{props.dataUser.aboutMe}</p></div>
                        <div>
                            <StatusProfile dataUser={props.dataUser} fieldProfile={props.fieldProfile} status={props.status} userId={props.userId}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MyDataProfile;