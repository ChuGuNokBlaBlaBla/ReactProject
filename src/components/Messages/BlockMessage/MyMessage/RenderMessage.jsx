import React from 'react';
import s from './MyMessage.module.css'
import ContainerSentMessage from './Container/ContainerSentMessage';

const RenderMessage = (props) => props.dataSentMessage.map((f) => <ContainerSentMessage myMessage={f.myMessage} src={f.src} />)

export default RenderMessage