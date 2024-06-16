import React, { useEffect } from "react";
import s from './ProfileBlock.module.css'

const StatusProfile = (props) => {
    console.log(props);
    useEffect(() => {
        props.fieldProfile.getStatus(props.userId)
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
                    placeholder="Ваш статус..."
                    onBlur={() => { closeEditMode(props.status) }}
                    value={props.status} onChange={(e) => {
                        props.fieldProfile.changeStatusMessage(e.target.value)
                    }} />
            </form>
        }
    </div>
}

export default StatusProfile;