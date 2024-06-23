import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={s.wrapSidebar}>
            <div className={s.sidebar}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? s.active : ""}>Мой профиль</NavLink>
                <NavLink to="/messages" className={({ isActive }) => isActive ? s.active : ""}>Мои сообщения</NavLink>
                <NavLink to="/my_friends" className={({ isActive }) => isActive ? s.active : ""}>Мои друзья</NavLink>
                <NavLink to="/login" className={({ isActive }) => isActive ? s.active : ""}>Настройки</NavLink>
            </div>
        </div>
    )
}



export default Sidebar;