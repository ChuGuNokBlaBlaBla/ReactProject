import React from 'react';
import s from './MyMessage.module.css'

const RenderMessage = (props) => {
    return (
        props.dataSentMessage.map((data) => {
            return (
                <div className={s.wrapMyMessage}>
                    <div className={s.blockIconMessage}>
                        <div className={s.message}>{data.myMessage}</div>
                        <div className={s.wrapMyIcon}>
                            <img src={data.src} />
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default RenderMessage