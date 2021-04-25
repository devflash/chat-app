import {useEffect, useState} from 'react';
import database from '../../firebase';

const useSearchRoom = (query, rooms=[], dispatch) => {
    // const [rooms, setRooms] = useState([]);
    const [filtered, setFilteredRooms] = useState([]);
    useEffect(() => {
        let roomsData = [];
        // fetch('json/rooms.json').then((data) =>{
        //     return data.json();
        // }).then((rooms) => {
        //     roomsData = rooms.map((cur) => ({
        //         ...cur,
        //         data: {
        //             ...cur.data,
        //             avatar: `https://avatars.dicebear.com/api/bottts/${Math.round(Math.random() * 40)}.svg`
        //         }
        //     }));
        //     dispatch({type: 'INITIALIZE_ROOMS', rooms: roomsData});
        //     setFilteredRooms(roomsData);    
        // }).catch((error) => {
        //     console.log(error);
        // });
        database.collection('rooms').onSnapshot((snapshot) => {
            rooms = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: {
                        ...doc.data(),
                        avatar: `https://avatars.dicebear.com/api/bottts/${Math.round(Math.random() * 40)}.svg`
                    }
                }
            ))
            dispatch({type: 'INITIALIZE_ROOMS', rooms});
            setFilteredRooms(rooms);
        });
    }, []);

    useEffect(() => {
        if(rooms.length > 0 && query.length){
            setFilteredRooms(rooms.filter((cur) => cur.data.name.toLowerCase().includes(query.toLowerCase())));
        }else{
            setFilteredRooms(rooms);
        }
        
    }, [query]);

    return filtered;
}

export default useSearchRoom;