import React,{useState} from 'react';
import './Login.css';
import { auth, provider } from '../../firebase';
import RingLoader from 'react-spinners/RingLoader';

function Login({dispatch}) {
    const [loader, setLoader] = useState(false);
    const handleGoogleLogin = () => {
        setLoader(true);
        auth.signInWithPopup(provider).then((user) =>{
            console.log("user loggedIn" , user);
            dispatch({type:'USER_SIGN_IN', user});
            setLoader(false);
        }).catch((error) => alert("Something went wrong!!!"))

    };
    if(loader) return <RingLoader loading={loader} size={150}/>
    return (
        <div className="login">
            <div className="login__content">
                <h1>Login To Chat APP</h1>
                <button className="login__btn" onClick={handleGoogleLogin}>Google login</button>
            </div>
        </div>
    )
}

export default Login
