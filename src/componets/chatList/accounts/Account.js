import React from 'react';
import './Account.css';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Account({id, name, avatar}) {
    return (
        <Link to={`/rooms/${id}`}>
            <div className="account">
                <Avatar src={avatar}/>
                <div className="account__info">
                    <h1>{name}</h1>
                </div>
            </div>
        </Link>
    )
}

export default Account
