import React from 'react';
import './Message.css';
import { formatDate } from '../../../utils';

const recipientColors = ['orange', 'purple', 'blue', 'green', 'yellow'];

function Message({recipient, timeStamp, message, isSender}) {
    return (
        <div className={["chat__message", isSender && "sender__msg"].join(' ')}>
            {!isSender && <span className={["recipient", recipientColors[Math.round(Math.random() * 4)]].join(' ')}>{recipient}</span>}
            <p className={["message", isSender ? "sent" : "received"].join(' ')}>{message}</p>
            <span className="timeStamp">{formatDate(timeStamp)}</span>
        </div>

    )
}

export default Message
