import React from 'react';
import Posts from '../../components/Posts/Posts.jsx'
import s from './ProfileBlock.module.css'

const BlockProfile = (props) => {
    return (
        <div className={s.wrapContent}>
            <div className={s.content}>
                <div className={s.backMyProfile}>
                    <img src="https://olimpstroyservis.ru/images/companies/1/KD/foto-1-1.jpg" />
                </div>
                <div className={s.wrapAboutMe}>
                    <div className={s.myPhoto}>
                        <img src="https://nashzelenyimir.ru/wp-content/uploads/2018/01/%D0%9D%D0%BE%D1%81%D0%BE%D1%80%D0%BE%D0%B3-%D1%84%D0%BE%D1%82%D0%BE.jpg" />
                    </div>
                    <div className={s.profileInfo}>
                        <h2 className={s.profileInfoName}>Иван Старов</h2>
                        <p>Дата рождения</p>
                        <p>Город</p>
                        <p>Братья и сёстры</p>
                    </div>
                </div>
                <Posts state={props.state}
                    dispatch={props.dispatch}
                // addPost={props.addPost} 
                // changeTextPost={props.changeTextPost} 
                />
            </div>
        </div>
    )
}

export default BlockProfile;