import React from 'react';
import s from './MyMessage.module.css'

const SendMessage = (props) => {

    return (
        props.dataSentMessage.map((f) => {
            return (
                <div className={s.wrapMyMessage}>
                    <div className={s.blockIconMessage}>
                        <div className={s.message}>{f.myMessage}</div>
                        <div className={s.wrapMyIcon}>
                            <img src={f.src} />
                        </div>
                    </div>
                </div>
            )
        })
    )

}

export default SendMessage