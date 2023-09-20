import React from 'react';
import s from './ProfileBlock.module.css'
import Preloader from '../Common/Preloader/Preloader';

const MyDataProfile = (props) => {
    return (
        props.state === null ? <Preloader /> :
            <div className={s.content}>
                <div className={s.backMyProfile}>
                    <img src="https://olimpstroyservis.ru/images/companies/1/KD/foto-1-1.jpg" />
                </div>
                <div className={s.wrapAboutMe}>
                    <div className={s.myPhoto}>
                        <img src={props.state.photos.large} />
                        {/* <img src="https://nashzelenyimir.ru/wp-content/uploads/2018/01/%D0%9D%D0%BE%D1%81%D0%BE%D1%80%D0%BE%D0%B3-%D1%84%D0%BE%D1%82%D0%BE.jpg" /> */}
                    </div>
                    <div className={s.profileInfo}>
                        <h2 className={s.profileInfoName}>{props.state.fullName}</h2>
                        <p>Дата рождения: 11.11.2011</p>
                        <p>{props.state.aboutMe}</p>
                        <p>{props.state.lookingForAJobDescription}</p>
                    </div>
                </div>
            </div>
    )
}

export default MyDataProfile;