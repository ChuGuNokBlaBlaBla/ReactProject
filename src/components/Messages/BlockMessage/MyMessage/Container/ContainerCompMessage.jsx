import { connect } from "react-redux"
import { newMessage } from "../../../../../redux/dialogsReducer"
import ChatImput from "../ChatImput"

const mapStateToProps = (state) => {
    return {
        valueMessage: state.dialogs.valueMessage
    }
}

const ContainerMyMessage = connect(mapStateToProps, {newMessage})(ChatImput)

export default ContainerMyMessage