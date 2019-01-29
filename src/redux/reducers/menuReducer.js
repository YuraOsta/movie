import { TOGGLE_MENU } from "../actions/actionTypes";

const initialState = {
    openedMenu: false
}

export default function menuReducer(state=initialState, action){
    switch(action.type){
        case TOGGLE_MENU:
            return {
                ...state, openedMenu: !state.openedMenu
            }
        default:
            return state;
    }
}