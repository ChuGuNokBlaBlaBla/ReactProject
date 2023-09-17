import React from 'react';
import RenderMessage from './MyMessage/RenderMessage'
import { useSelector } from 'react-redux';
import ContainerMyMessage from './MyMessage/Container/ContainerCompMessage';


const ContListMessage = (props) => {

    const dataSentMessage = useSelector(state => state.dialogs.sentMessage)

    return (
        <div>
            <RenderMessage dataSentMessage={dataSentMessage} />
            <ContainerMyMessage />
        </div>
    )
}

export default ContListMessage;