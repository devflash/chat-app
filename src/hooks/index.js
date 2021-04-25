import { auth } from '../firebase';
import { useHistory } from 'react-router-dom'
const useSignOutUser = (dispatch) => {
    const history = useHistory();

    const signOutUser = () => {
        auth.signOut().then(() => {
            history.replace('/');
        }).catch((message) => {
            console.log(message);
        });
    }

    return signOutUser;
}

export default useSignOutUser;