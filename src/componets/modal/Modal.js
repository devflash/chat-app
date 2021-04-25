import React, { useState } from 'react'
import './Modal.css';
import ClearIcon from '@material-ui/icons/Clear';

function Model({isOpen, title, children, onDialogClose}) {
    return (
        <>
            <div className={["dialog__wrapper", !isOpen && "dialog__close"].join(' ')}> </div>
            <div className={["dialog__content", isOpen && "dialog__openAnimation"].join(' ')}>
                <div className="dialog__header">
                    <p>{title}</p>
                    <ClearIcon onClick={onDialogClose} />
                </div>
                <div className="dialog__body">
                    {children}
                </div>
            </div>
        </>

    )
}

export default Model
