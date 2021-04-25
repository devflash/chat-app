import { auth } from '../firebase';
export const signOutUser = (dispatch) => {
    auth.signOut().then(() => {
        dispatch({type: 'USER_SIGN_OUT'});
    }).catch((message) => {
        console.log(message);
    });
}