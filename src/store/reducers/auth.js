import {SET_CURRENT_USER} from '../actionTypes';

const DEFAULT_STATE = {
    isAuthenticated : false, //means there is no user
    user : {} //so its empty as default is when no one logged in
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.types){
        case SET_CURRENT_USER:
                return {
                    isAuthenticated :!Object.keys(action.user).length,  //to check if the user s there or not 
                    user: action.user
                }

        default:
            return state;
    }
}