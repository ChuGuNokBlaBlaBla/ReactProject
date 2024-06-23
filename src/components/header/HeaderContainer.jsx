import React from 'react';
import Header from './Header';

const HeaderContainer = (props) => {
    return <Header authMe={props.authMe} />
}

export default HeaderContainer;