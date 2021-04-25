import React, {useEffect, useState} from 'react';
import './ErrorToast.css';

const ErrorToast = ({error, dispatch}) => {
    const [showError, setShowError] = useState();
    useEffect(() => {
        let timer = null;
        if(error){
            setShowError(true);
            timer = setTimeout(() => {
                setShowError(false);
                dispatch({type: 'SET_SERVICE_ERROR', isError: false})
            },2000)
        }
        return () => {
            timer && clearTimeout(timer);
        }
    }, [error]);

    return (
        <div className={["error", showError && "showError"].join(' ')}>
            <span>Something went wrong!!!</span>
        </div>
    )
};

export default ErrorToast
