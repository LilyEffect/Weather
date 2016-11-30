import { FETCH_WEATHER, CLEAR_LIST } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
    case CLEAR_LIST:
      return [];
  }

  return state;
}
