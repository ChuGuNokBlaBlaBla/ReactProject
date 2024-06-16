import React from 'react';
import s from'./ProfileBlock.module.css'

const BlockProfile = () => {
    return (
        <div className={s.wrapContent}>
            <div className={s.content}>
                <div className={s.backMyProfile}>
                    <img src="https://olimpstroyservis.ru/images/companies/1/KD/foto-1-1.jpg" />
                </div>
                <div className={s.wrapAboutMe}>
                    <div className={s.myPhoto}>
                        <img src="https://static.kulturologia.ru/files/u23606/2360606209.jpg" />
                    </div>
                    <div className={s.profileInfo}>
                        <h2 className={s.profileInfoName}>Иван Старов</h2>
                        <p>Дата рождения</p>
                        <p>Город</p>
                        <p>Братья и сёстры: У меня есть братья и сёстры!</p>
                    </div>
                </div>
                <div className={s.wrapMyPost}>Мой пост</div>
            </div>
        </div>
    )
}

export default BlockProfile;