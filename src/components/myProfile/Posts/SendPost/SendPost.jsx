import React from 'react';
import s from './SendPost.module.css';

class SendPost extends React.Component {
    render() {
        return (
            <div className={s.sendPost}>
                <textarea
                    type="text"
                    onChange={this.props.changeValuePost}
                    value={this.props.valuePost}
                />
                <button onClick={this.props.addPost}>Отправить</button>
            </div>
        )
    }
}

export default SendPost;
