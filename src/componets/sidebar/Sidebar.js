import React, { useState } from 'react'
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatList from '../chatList/ChatList';
import Options from '../options/Options';
import RoomInput from '../chatList/createRoom/roomInput/RoomInput';
import Modal from '../modal/Modal';
import useWindowWidth from '../hooks/useWindowWidth';
import useSignOutUser from '../../hooks';

function Sidebar({rooms, dispatch, user}) {
    const [query, setQuery] = useState('');
    const [isDialogOpen, toggleDialog] = useState(false);
    const windowWidth = useWindowWidth();
    const signOutUser = useSignOutUser(dispatch);
    
    const options = [
        {
            id: 'CREATE_ROOM',
            name: 'New room'
        },
        {
            id: 'SIGN_OUT',
            name: 'Sign out'
        }
    ];

    const handleOptionClick = (e) => {
        switch(e.target.id){
            case 'CREATE_ROOM':  
                toggleDialog(true);
                break;
            case 'SIGN_OUT':
                signOutUser();
                break;
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <img src={user?.profileImg ? user.profileImg :"/images/profile.jpg"} alt="profileImage" />
                <p className="sidebar__profileName">{user?.displayName}</p>
                {
                    windowWidth < 640 && 
                    <Options userOptions={options} handleOptionClick={handleOptionClick}/>
                }
            </div>

            <div className="sidebar__search">
                <SearchIcon/>
                <input 
                    value={query}
                    className="sidebar__searchInput"
                    type="text"
                    placeholder="Search or start new chat"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="sidebar__chatList">
                <ChatList 
                    query={query} 
                    rooms={rooms}
                    dispatch={dispatch}
                />
            </div>

            <Modal isOpen={isDialogOpen} title="Create Room" onDialogClose={() => toggleDialog(false)}>
                {isDialogOpen && <RoomInput />}
            </Modal>
        </div>
    )
}

export default Sidebar
