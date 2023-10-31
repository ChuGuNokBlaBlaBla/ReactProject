import React from 'react';
import s from './ProfileBlock.module.css'
import Preloader from '../Common/Preloader/Preloader';
import StatusProfile from './StatusProfle';

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
                    </div>
                    <div className={s.profileInfo}>
                        <div><h2 className={s.profileInfoName}>{props.state.fullName}</h2></div>
                        <div><p>Дата рождения: 11.11.2011</p></div>
                        <div><p>{props.state.aboutMe}</p></div>
                        <div>
                            <StatusProfile statusProfile={props.state.statusProfile}
                                changeStatus={props.changeStatus}
                                changeValueMyStatus={props.changeValueMyStatus}
                                getStatus={props.getStatus}
                                statusUpdate={props.statusUpdate}
                                status={props.status}
                                editMode={props.editMode}
                                changeEditMode={props.changeEditMode}
                                statusMessage={props.statusMessage}
                                changeStatusMessage={props.changeStatusMessage}
                            />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MyDataProfile;