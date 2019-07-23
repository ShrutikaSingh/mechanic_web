
import {ADD_ERROR,REMOVE_ERROR} from '../actionTypes';
export default (state={message : null},action) =>{ //this function gonna take 2 this state as well as action
switch(action.type){ //this gonna check with action.types that is ADD_ERROR or REMOVE_ERROR
    case ADD_ERROR:
        return {...state, message: action.error};
    case REMOVE_ERROR:
        return {...state, message: null }; ////since the removerError function of actions/error.js has no payload 
    default:
        return state;
  }
}