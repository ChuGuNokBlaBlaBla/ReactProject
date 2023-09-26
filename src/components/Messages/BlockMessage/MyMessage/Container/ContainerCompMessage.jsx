import { connect } from "react-redux"
import { changeText, newMessage } from "../../../../../redux/dialogsReducer"
import ChatImput from "../ChatImput"

const mapStateToProps = (state) => {
    return {
        valueMessage: state.dialogs.valueMessage
    }
}

const ContainerMyMessage = connect(mapStateToProps, {newMessage, changeText})(ChatImput)

export default ContainerMyMessage