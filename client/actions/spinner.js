import { SPINNER_STOP, SPINNER_START } from '../constants/ActionTypes';

export function spinnerStart() {
  return {
    type: SPINNER_START,
  };
}

export function spinnerStop() {
  return {
    type: SPINNER_STOP,
  };
}
