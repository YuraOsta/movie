import { SET_FORM_VALID, SET_EMAIL_VALID, SET_PASSWORD_VALID } from "../actions/actionTypes";

const InitialState = {
    token: null,
    email: {
        valid: true
    },
    password: {
        valid: true
    },
}

export default function authReducer(state = InitialState, action){
    console.log(action.type, state)
    switch (action.type) {
        case SET_EMAIL_VALID:
            return {
                ...state, email: action.valid
            }
        case SET_PASSWORD_VALID: 
            return{
                ...state, password: action.valid
            }
        default:
            return state
    }
}