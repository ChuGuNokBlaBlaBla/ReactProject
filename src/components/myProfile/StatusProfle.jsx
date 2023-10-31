import React, { useEffect } from "react";

const StatusProfile = (props) => {

    useEffect(()=> {
        props.getStatus()
    },[])

    const activateEditMode = () => {
        props.changeEditMode(true)   
    }

    const closeEditMode = (message) => {
        props.statusUpdate(message)
        props.changeEditMode(false)
    }

    return <div>
        {!props.editMode ? <div>
            <span onClick={()=> {activateEditMode()}} > {props.status} </span>
        </div> : <div>
            <input type="text" autoFocus={true}
                onBlur={()=>{closeEditMode(props.status)}}
                value={props.status} onChange={(e) => props.changeStatusMessage(e.target.value)} />
                
        </div>}
    </div>
}

export default StatusProfile;