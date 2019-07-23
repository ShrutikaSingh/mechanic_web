import {ADD_ERROR,REMOVE_ERROR} from '../actionTypes';

export const addError = error => ({
    type: ADD_ERROR,
    error //error is payload
});

export const removeError = () =>({
    type:REMOVE_ERROR // when we remove error its gonna be null so no need of payload
}) 

