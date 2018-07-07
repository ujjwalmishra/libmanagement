// @flow
import {LOGGING, LOGGED_IN, LOGGED_OUT } from '../actions/user';

export type userStateType = {
  +user: string,
  +loading: boolean
};

type actionType = {
  +type: string
};

const InitialState = { user: null, loading: false };

export default function user(state= InitialState, action: actionType) {
  switch (action.type) {
    case LOGGING:
      return { ...state, loading: true};
    case LOGGED_IN:
      return { ...state, user: "Librarian"};
    case LOGGED_OUT:
      return { ...state, user: null};      
    default:
      return state;
  }
}
