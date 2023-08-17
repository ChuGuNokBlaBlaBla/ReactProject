import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    console.log(s.sidebar);
    return (
        <div className={s.wrapSidebar}>
            <div className={s.sidebar}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? s.active : ""}>Мой профиль</NavLink>
                <NavLink to="/messages" className={({ isActive }) => isActive ? s.active : ""}>Мои сообщения</NavLink>
                <NavLink to="/music" className={({ isActive }) => isActive ? s.active : ""}>Моя музыка</NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? s.active : ""}>Настройка</NavLink>
            </div>
        </div>
    )
}



export default Sidebar;