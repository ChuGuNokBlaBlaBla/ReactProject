import s from '../MyMessage/MyMessage.module.css'

const MessageRender = (props)=> {
    return (
        <div className={s.wrapMyMessage}>
            <div className={s.blockIconMessage}>
                <div className={s.message}>{props.myMessage}</div>
                <div className={s.wrapMyIcon}>
                    <img src={props.src} />
                </div>
            </div>
        </div>
    )
}

export default MessageRender;