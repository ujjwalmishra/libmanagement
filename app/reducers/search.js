// @flow
import { SEARCH, SEARCHING, SEARCH_COMPLETE } from '../actions/search';

export type userStateType = {
  +results: [],
  +loading: boolean
};

type actionType = {
  +type: string
};

const InitialState = { results: null, loading: false };

export default function search(state= InitialState, action: actionType) {
  switch (action.type) {
    case SEARCH:
      return { ...state};
    case SEARCHING:
      return { ...state, loading: true};
    case SEARCH_COMPLETE:
        console.log(action);
      return { ...state, results: action.payload, loading: false};      
    default:
      return state;
  }
}
