import React, {useState} from 'react';
import './RoomInput.css';
import database from '../../../../firebase';

function RoomInput({dispatch}) {
    const [roomName, setRoomName] = useState('');

    const handleCreateRoom = () => {
        database.collection('rooms').add({
            name: roomName
        }).catch(() => {
            debugger;
            dispatch({type: 'SET_SERVICE_ERROR', isError: true})
            })
    };

    return (
        <div className="room__input">
            <input value={roomName} placeholder="Room Name" onChange={(e) => setRoomName(e.target.value)} />
            <button className="create__btn" onClick={handleCreateRoom}>Create</button>
        </div>
    )
}

export default RoomInput
