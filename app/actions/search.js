// @flow
import axios from 'axios';
import { list } from './../server/api/book';

type actionType = {
  +type: string
};

export const SEARCH = 'SEARCH';
export const SEARCHING = 'SEARCHING';
export const SEARCH_COMPLETE = 'SEARCH_COMPLETE';

export function search(values) {
    return (dispatch) => {       
        dispatch(searching());
        return list();
    }
}

export function searching() {
    return {
        type: SEARCHING
    };
}

export function searchComplete(books) {
    return {
      type: SEARCH_COMPLETE,
      payload: books
    };
}



