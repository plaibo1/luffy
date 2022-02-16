import { useEffect, useState } from "react";

const HomeStatusWithHooks = (props) => {

    const [activeMode, setActiveMode] = useState(false);

    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setActiveMode(true)
    }

    const deactivateEditMode = () => {
        setActiveMode(false)
        props.updateStatus(status)
    }

    const onStatusUpdate = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {
                ! activeMode &&
                <div onClick={activateEditMode}>
                    {props.status}
                </div>
            }
            {
                activeMode && 
                <div>
                    <input type="text"
                        value={status}
                        onChange={onStatusUpdate} 
                        autoFocus onBlur={deactivateEditMode} 
                    />
                </div>
            }
        </div>
    )
}

export default HomeStatusWithHooks;
