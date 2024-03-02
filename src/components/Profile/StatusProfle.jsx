import React, { useEffect } from "react";
import s from './ProfileBlock.module.css'

const StatusProfile = (props) => {

    useEffect(() => {
        props.fieldProfile.getStatus(props.dataUser)
    }, [])

    const activateEditMode = () => {
        props.fieldProfile.changeEditMode(true)
    }

    const closeEditMode = (message) => {
        props.fieldProfile.statusUpdate(message)
        props.fieldProfile.changeEditMode(false)
    }

    return <div>
        {!props.dataUser.editMode ? <div>
            <span className={s.statusForm} onClick={() => { activateEditMode() }}> {props.status} </span>
        </div> :
            <form>
                <input type="text" autoFocus={true}
                    onBlur={() => { closeEditMode(props.status) }}
                    value={props.status} onChange={(e) => {
                        props.fieldProfile.changeStatusMessage(e.target.value)
                    }} />
            </form>
        }
    </div>
}

export default StatusProfile;