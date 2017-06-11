import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR,
  SET_FILTER, SORT_ASC, SORT_DESC
} from '../constants/ActionTypes';
import { spinnerStart, spinnerStop } from './spinner';

const url = 'https://www.reddit.com/r/aww.json'

export function sortImagesByAsc() {
  return { 
    type: SORT_ASC 
  }; 
};

export function sortImagesByDesc() {
  return { 
    type: SORT_DESC
  }; 
};

export function imagesFetchSuccess(images) {
  return {
    type: FETCH_DATA_SUCCESS,
    images
  }
}

export function imagesFetchError() {
  return {
    type: FETCH_DATA_ERROR
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  };
}

export function fetchImages() {
  return (dispatch) => {
    dispatch(spinnerStart());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(spinnerStop());
        return response.json();
      })
      .then((items) => {
        dispatch(imagesFetchSuccess(items));
      })
      .catch(() => dispatch(imagesFetchError()));
  }; 
};
