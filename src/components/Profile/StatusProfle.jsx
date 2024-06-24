import React, { useEffect, useState } from "react";
import s from './ProfileBlock.module.css'

const StatusProfile = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState()

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const closeEditMode = (message) => {
        setEditMode(false)
        props.fieldProfile.statusUpdate(message)
    }

    return (
        <div>
            {!editMode ? <div>
                <span className={s.statusForm} onClick={() => { activateEditMode() }}> {status} </span>
            </div> :
                <form>
                    <input type="text" autoFocus={true}
                        onBlur={() => { closeEditMode(status) }}
                        value={status} onChange={(e) => {
                            setStatus(e.target.value)
                        }} />
                </form>
            }
        </div>
    )
}

export default StatusProfile;