import { SPINNER_START, SPINNER_STOP } from '../constants/ActionTypes';

const initialState = false;

export default (state = initialState, action) => {
  switch(action.type) {
    case SPINNER_START:
      return true;
    case SPINNER_STOP:
      return false;
    default:  
      return state;
  }

}