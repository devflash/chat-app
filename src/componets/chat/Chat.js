import React, {useState,useEffect} from 'react'
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import Message from './message/Message';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useParams } from 'react-router-dom';
import database from '../../firebase';
import firebase from 'firebase';
import Modal from '../modal/Modal';
import RoomInput from '../chatList/createRoom/roomInput/RoomInput';
import Options from '../options/Options';
import useWindowWidth from '../hooks/useWindowWidth';

function Chat({rooms, user, dispatch}) {
    const { roomId } = useParams();
    const [roomInfo, setRoomInfo] = useState({});
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isDialogOpen, toggleDialog] = useState(false);
    const windowWidth = useWindowWidth();
    const options = [
        {
            id: 'CREATE_ROOM',
            name: 'New room'
        },
        {
            id: 'SHOW_ROOMS',
            name: 'Show rooms'
        },
        {
            id: 'SIGN_OUT',
            name: 'Sign out'
        }
    ];
    useEffect(() => {
        if(roomId && rooms.length > 0){
           const currentRoom  = rooms.find((cur) => cur.id === roomId);
           setRoomInfo(currentRoom);
            
           database
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timeStamp', 'asc')
            .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))));
           
        }
        setMessage('');
    }, [roomId]);

    const sendMessage = () => {
        const payload = {
            name: user?.user?.displayName,
            message,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        console.log(payload);
        if(message.length){
            database
                .collection('rooms')
                .doc(roomId)
                .collection('messages')
                .add(payload)
        }

           
    }

    const handleOptionClick = (e) => {
        switch(e.target.id){
            case 'CREATE_ROOM':  
                toggleDialog(true);
                break;
            case 'SHOW_ROOMS':
                console.log('Show Rooms');
                break;
            case 'SIGN_OUT':
                console.log('SignOut');
                break;
        }
    }

    return (
        <div className="chat">
            <div className="chat__header">
                {
                    windowWidth < 640 && <ArrowBackIcon />
                }
                <Avatar src={roomInfo?.data?.avatar} />
                <div className="chat__info">
                    <h1>{roomInfo?.data?.name}</h1>
                    <p>Last activity: Tue 18, 2020 7:20 PM</p>
                </div>
                <Options userOptions={options} handleOptionClick={handleOptionClick}/>
            </div>
            <div className="chat__section">
                {
                    messages.length > 0 && messages.map((m) => (
                        <Message key={m.id} recipient={m.data.name} timeStamp={m.data.timeStamp} message={m.data.message}  isSender={user?.user?.displayName === m.data.name}/>
                    ))
                }
            </div>

            <div className="chat__input">
                <input value={message} type="text" placeholder="Type message" onChange={(e) => setMessage(e.target.value)} />
                <SendIcon onClick={sendMessage}/>
            </div>

            <Modal isOpen={isDialogOpen} title="Create Room" onDialogClose={() => toggleDialog(false)}>
                {isDialogOpen && <RoomInput />}
            </Modal>
        </div>
    )
}

export default Chat
