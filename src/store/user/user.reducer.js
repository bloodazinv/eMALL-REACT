import {USER_ACTION_TYPES} from "./user.types";

const INITIAL_STATE = {
    current_User: null,
    isLoading: false,
    error:null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    //1. deconstruct "action" into "type" and "payload"
    const {type, payload} = action;
    //2. return results according to different action type
    switch(type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                //set currentuser as action's payload
                ...state,
                current_User: payload
            };

        case USER_ACTION_TYPES.SIGN_IN_FAILURE:
            return { ...state, error: payload};

        case USER_ACTION_TYPES.SIGN_UP_FAILURE:
            return {...state, error: payload};

        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {...state, current_User: null};

        case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
            return {...state, error: payload};

        default:
            return state;
    }
}

