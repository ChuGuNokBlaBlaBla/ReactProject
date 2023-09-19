import { connect } from "react-redux"
import { changeText, newMessage } from "../../../../../redux/dialogsReducer"
import ChatImput from "../ChatImput"

const mapStateToProps = (state) => {
    return {
        valueMessage: state.dialogs.valueMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sentMessage: () => dispatch(newMessage()),
        changeMyMessage: (e) => {
            let message = e.target.value
            dispatch(changeText(message))
        }
    }
} 

const ContainerMyMessage = connect(mapStateToProps, mapDispatchToProps)(ChatImput)

export default ContainerMyMessage