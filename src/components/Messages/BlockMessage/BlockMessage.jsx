import React from 'react';
import RenderMessage from './MyMessage/RenderMessage'
import { connect } from 'react-redux';
import ContainerMyMessage from './MyMessage/Container/ContainerCompMessage';
import { getSentMessage } from '../../../Selectors/selectorDialogs';

const mapStateToProps = (state) => {
    return {
        sentMessage: getSentMessage(state)
    }
}

const ContListMessage = (props) => {
    return (
        <div>
            <RenderMessage dataSentMessage={props.sentMessage} />
            <ContainerMyMessage />
        </div>
    )
}

export default connect(mapStateToProps, {})(ContListMessage);