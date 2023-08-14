import React from 'react';
import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={s.wrapSidebar}>
            <div className={s.linkSidebar}>Мой профиль</div>
            <div className={s.linkSidebar}>Мои сообщения</div>
            <div className={s.linkSidebar}>Моя музыка</div>
            <div className={s.linkSidebar}>Настройка</div>
        </div>
    )
}

export default Sidebar;