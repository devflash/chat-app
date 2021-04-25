import React, { useState } from 'react'
import './CreateRoom.css';
import Model from '../../modal/Modal';
import RoomInput from './roomInput/RoomInput';

function CreateRoom() {
    const [isDialogOpen, toggleDialog] = useState(false);

    return (
        <div className="create__room">
            <div className="content">
                <p>No Room found</p>
                <button className="create__btn" onClick={() => toggleDialog(true)}>Create room</button>
            </div>
            
            <Model isOpen={isDialogOpen} title="Create Room" onDialogClose={() => toggleDialog(false)}>
                {isDialogOpen && <RoomInput />}
            </Model>
        </div>

    )
}

export default CreateRoom
