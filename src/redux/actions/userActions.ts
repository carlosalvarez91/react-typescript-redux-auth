
import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, SET_AUTHENTICATED  } from '../types'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const loginUser = (userData: any) => (dispatch: any) => {
        dispatch({ type: LOADING_UI })
    
        const {email, password} = userData;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential:any) => {

            console.log(userCredential)

            const token = userCredential.user.accessToken;
            localStorage.setItem('token', token);

            dispatch({
                type: SET_AUTHENTICATED,
                payload: auth.currentUser
            });
            
            dispatch({
                type: CLEAR_ERRORS
            });
        })
        .catch((error) => {
            console.error(error)
            dispatch({
                type: SET_ERRORS,
                payload: error.message
                });
        });
  
}

export const logoutUser = (navigate:any) => (dispatch: any) => {

    signOut(auth).then(() => {
        localStorage.removeItem('token');
        dispatch({
        type: SET_UNAUTHENTICATED
        });
    }).catch((error) => {
        console.error(error)
    });
};

export const getUser = () => (dispatch: any) =>{

    onAuthStateChanged(auth, (user) => {
        if (user){
            dispatch({
                type: SET_AUTHENTICATED,
                payload: auth.currentUser
            });
        }else{
            dispatch({
                type: SET_UNAUTHENTICATED
            });
        }
    });
}