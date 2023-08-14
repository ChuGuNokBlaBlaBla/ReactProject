import React from 'react';
import '../../style/SideBar.css'

const SideBar = () => {
    return (
        <div className="wrap-sidebar">
            <div className="sidebar">
                <div className="link-sidebar">Мой профиль</div>
                <div className="link-sidebar">Мои сообщения</div>
                <div className="link-sidebar">Моя музыка</div>
                <div className="link-sidebar">Настройка</div>
            </div>
        </div>
    )
}

export default SideBar;