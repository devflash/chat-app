import React,{useState} from 'react';
import './Login.css';
import { auth, provider } from '../../firebase';
import firebase from 'firebase';
import RingLoader from 'react-spinners/RingLoader';

function Login({dispatch}) {
    const [loader, setLoader] = useState(false);
    const handleGoogleLogin = () => {
        setLoader(true);
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
            auth.signInWithPopup(provider).then((user) =>{
                const userData = {
                    displayName: user.user.displayName,
                    profileImg: user.user.photoURL
                }
                dispatch({type:'USER_SIGN_IN', userData});
                setLoader(false);
            }).catch((error) => {
                dispatch({type: 'SET_SERVICE_ERROR', isError: true})
                setLoader(false);
            });
        }).catch((error) => {
            dispatch({type: 'SET_SERVICE_ERROR', isError: true})
            setLoader(false);
        });

    };
    if(loader) return <RingLoader loading={loader} size={150}/>
    return (
        <>
        <div className="login">
            <div className="login__content">
                <h1>Login To Chat APP</h1>
                <button className="login__btn" onClick={handleGoogleLogin}>Google login</button>
            </div>
        </div>
        </>
    )
}

export default Login
