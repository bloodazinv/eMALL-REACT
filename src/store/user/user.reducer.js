import {USER_ACTION_TYPES} from "./user.types";

const INITIAL_STATE = {
    current_User: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    //1. deconstruct "action" into "type" and "payload"
    const {type, payload} = action;
    //2. return results according to different action type
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                //set currentuser as action's payload
                ...state,
                current_User: payload
            };
        default:
            return state;
    }
}

