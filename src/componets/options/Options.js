import React from 'react'
import './Options.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Options({userOptions=[],handleOptionClick}) {
    return (
        <div className="dropdown">
            <MoreVertIcon />
            <div className="dropdown__options">
                <ul onClick={(e) => handleOptionClick(e)}>
                    {
                        userOptions.length > 0 && (
                            userOptions.map((cur) => <li key={cur.id} id={cur.id}>{cur.name}</li>)
                        )
                    }
                   
                </ul>
            </div>
        </div>
    )
}

export default Options
