import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
import login from '../../assets/login.png'
import myIcon from '../../assets/myIcon.jpg'

const Header = (props) => {
    return (
        <header className={s.wrapHeader}>
            <div className={s.header}>
                <img src="https://e7.pngegg.com/pngimages/268/232/png-clipart-social-media-computer-icons-social-network-share-icon-encapsulated-postscript-social-network-logo-social-media.png" />
                {props.authMe === false ? 
                    <NavLink to={'/login/'}>
                        <img className={s.authIcon} src={login}></img>
                    </NavLink> : <img className={s.authIcon} src={myIcon}></img>
                }
            </div>
        </header>
    )
}

export default Header;