import React, {useEffect, useState} from 'react';

import './ChatList.css';
import Account from './accounts/Account';
import CreateRoom from './createRoom/CreateRoom';
import useSearchRoom from '../hooks/useSearchRoom';

function ChatList({ query, rooms, dispatch }) {
    const filteredRooms = useSearchRoom(query, rooms, dispatch);

    return (
    <>
       { filteredRooms.length > 0 ? (<div className="chatList">
            <h1>Chat List</h1>
            {
                filteredRooms.map((room) => (
                    <Account key={room.id} id={room.id} name={room.data.name} avatar={room.data.avatar}/>
                ))
            }

        </div>) : (
            <CreateRoom  />
        )
        }
    </>
    )
}

export default React.memo(ChatList);
