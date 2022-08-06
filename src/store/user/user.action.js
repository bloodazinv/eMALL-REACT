import {createAction} from "../../utils/reducer/reducer.utils";
import {USER_ACTION_TYPES} from "./user.types";


export const setCurrentUser = (user) =>
    //dispatch( action = {type, payload} )
    createAction(
        USER_ACTION_TYPES.SET_CURRENT_USER,//type
        user//value of payload
    );
