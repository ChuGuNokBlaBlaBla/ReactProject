import React from 'react';
import store from '../../../../redux/store-redux';
import { changeText, newMessage } from '../../../../redux/dialogsReducer';
import { connect } from 'react-redux';
import BlockMyMessage from './ContinerMyMessage';

// const MyMessage = (props) => {
//     // let changeMyMessage = (e) => {
//     //     let message = e.target.value
//     //     props.dispatch(props.changeText(message))
//     // }

//     // let sentMessage = () => {
//     //     let message = makeLink.current.value
//     //     props.dispatch(props.newMessage(message))
//     // }

//     // return (
//     //     <div>
//     //         <textarea type='text'
//     //             ref={makeLink}
//     //             onChange={changeMyMessage}
//     //             value={props.valueMessage}
//     //         />
//     //         <button onClick={sentMessage}>Отправить</button>
//     //     </div>
//     // )
// }

const mapStateToProps = (state) => {
    return {
        valueMessage: state.dialogs.valueMessage
    }
}
const mapDispatchToProps = (dispatch, state) => {
    return {
        sentMessage: () => {
            let message = state.valueMessage;
            dispatch(newMessage(message))
        },
        changeMyMessage: (e) => {
            let message = e.target.value
            dispatch(changeText(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockMyMessage);