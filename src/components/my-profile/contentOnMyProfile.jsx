import React from 'react';
import '../../style/ProfileBlock.css'

const BlockProfile = () => {
    return (
        <div className="wrap-content">
            <div className="content">
                <div className="back-my-profile">
                    <img src="https://olimpstroyservis.ru/images/companies/1/KD/foto-1-1.jpg" />
                </div>
                <div className="wrap-about-me">
                    <div className="my-photo">
                        <img src="https://static.kulturologia.ru/files/u23606/2360606209.jpg" />
                    </div>
                    <div className="profile-info">
                        <h2 className="profile-info-name">Иван Старов</h2>
                        <p>Дата рождения</p>
                        <p>Город</p>
                        <p>Братья и сёстры</p>
                    </div>
                </div>
                <div className="wrap-my-post">Мой пост</div>
            </div>
        </div>
    )
}

export default BlockProfile;