import React from "react";
import s from '../FriendUser.module.css';

const NumberPages = (props) => {
    let numberPages = Math.ceil(props.totalCount / props.count)
    let numberPageArr = []
    for (let i = 1; i <= numberPages; i++) {
        numberPageArr.push(i)
    }
    return (
        numberPageArr.map((numberPage) => {
            return <span className={props.page === numberPage ? s.activePage : s.itemPage} onClick={() => props.getUsers(numberPage)}>{numberPage}, </span>
        })
    )
}

export default NumberPages