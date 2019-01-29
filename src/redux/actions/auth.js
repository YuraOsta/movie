import axios from 'axios';
import { SET_EMAIL_VALID, SET_PASSWORD_VALID } from './actionTypes';

const apiKey = 'AIzaSyCb6De2PlP6M-hTleCaAx0APaN7D8enGq8';
export  function signUpUser(userData){
    return async function(dispatch){
        const signUpUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`
        await axios.post(signUpUrl, userData)
            .then(res=> {
                console.log(res);
            })
    }

}

export function setFormValid(valid, type){
    console.log(type);
    return {
        type: type === 'email' ? SET_EMAIL_VALID: SET_PASSWORD_VALID,
        valid
    }
}