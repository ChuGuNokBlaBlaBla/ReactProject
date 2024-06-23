import { connect } from "react-redux"
import { newMessage } from "../../../../../redux/dialogsReducer"
import ChatImput from "../ChatImput"
import { getValueMessage } from "../../../../../Selectors/selectorDialogs"

const mapStateToProps = (state) => {
    return {
        valueMessage: getValueMessage(state)
    }
}

const ContainerMyMessage = connect(mapStateToProps, {newMessage})(ChatImput)

export default ContainerMyMessage