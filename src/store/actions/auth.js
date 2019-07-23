import {addError,removeError} from './error';
import {SET_CURRENT_USER} from '../actionTypes';
import api from '../../services/api';

export const setCurrentUser = user =>({
    type:SET_CURRENT_USER,
    user    // user as payload
});

export const setToken = token =>{
    api.setToken(token);
}

export const authUser = (path,data) =>{
    return async dispatch => {
        try{
            const {token, ...user} = await api.call('post', `auth/${path}`,data);
            localStorage.setItem('jwtToken',token); // //localStorage is the browser that will allow the users to be logged in even if they closes the window
            api.setToken(token);
            dispatch(setCurrentUser(user));
            dispatch(removeError()); //in case there is error we will remove it

        }catch(err){
            const error= err.response.data;
            dispatch(addError(error));
        }
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.clear(); //we need to clear the local storage 
        api.setToken(null)//to get rid of the token that is saved to axios
        dispatch(SET_CURRENT_USER({})) //and set_cuurent_object to empty objects
        dispatch(removeError);
    }
}