import React from 'react';
import s from './Header.module.css'
const Header = ()=> {
    return (
        <header className={s.wrapHeader}>
            <div className={s.header}>
               <img src="https://e7.pngegg.com/pngimages/268/232/png-clipart-social-media-computer-icons-social-network-share-icon-encapsulated-postscript-social-network-logo-social-media.png" /> 
            </div>
        </header>
    )
}

export default Header;