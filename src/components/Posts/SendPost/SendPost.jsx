import React from 'react';
import s from './SendPost.module.css';

const SendPost = (props) => {

    let makeLink = React.createRef();

    let addPost = () => {
        let textAdd = makeLink.current.value
        props.addPost(textAdd)
    }

    let changeValuePost = ()=> {
        let textChange = makeLink.current.value
        props.changeTextPost(textChange);
    }

    return (
        <div className={s.sendPost}>
            <textarea type="text" 
            ref={makeLink} 
            onChange={changeValuePost}
            value={props.state.profilePage.changeDataText} />
            <button onClick={addPost}>Отправить</button>
        </div>
    )
}

export default SendPost;
