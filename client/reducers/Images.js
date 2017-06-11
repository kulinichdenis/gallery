import { sortBy } from 'lodash';
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR,
  SET_FILTER, SORT_ASC, SORT_DESC
} from '../constants/ActionTypes';

const initialState = {
  kind: "",
  data: [],
  filter: 0
}         

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      const data = sortBy(action.images.data.children, (item) => (item.data.num_comments));
      return { ...state, kind: action.images.kind, data };
    
    case FETCH_DATA_ERROR:
      return { kind: null, data: [] };
    
    case SET_FILTER:
      return { ...state, filter: action.filter }     
    
    case SORT_ASC:
      const data_asc = sortBy(state.data, (item) => (item.data.num_comments));
      return { ...state, data: data_asc }

    case SORT_DESC:
      const data_desc = sortBy(state.data, (item) => (item.data.num_comments * -1));
      return { ...state, data: data_desc }

    default:
      return state;
  }
}