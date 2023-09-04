import React from 'react';
import s from './SendPost.module.css';

const SendPost = (props) => {

    let makeLink = React.createRef();

    let addPost = () => {
        let textPost = makeLink.current.value
        // props.addPost(textAdd)
        props.dispatch({type: 'ADD-POST', textPost: textPost})
    }

    let changeValuePost = ()=> {
        let textChange = makeLink.current.value
        props.dispatch({type: 'CHANGE-VALUE-POST', textPost: textChange})
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
