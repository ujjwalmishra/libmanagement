// @flow
import type { counterStateType } from '../reducers/counter';

type actionType = {
  +type: string
};

export const LOGGING = 'LOGGING';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export function logging(values) {

    return (dispatch) => {       
        dispatch(asyncwait());
        return setTimeout(() => {
            dispatch(logged());
        }, 3000);
    }

}

export function asyncwait() {
    return {
        type: LOGGING
    };
}

export function logged() {
    return {
      type: LOGGED_IN
    };
}

export function loggedout() {
    return {
      type: LOGGED_OUT
    };
}


// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
// export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// export function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   };
// }

// export function decrement() {
//   return {
//     type: DECREMENT_COUNTER
//   };
// }

// export function incrementIfOdd() {
//   return (
//     dispatch: (action: actionType) => void,
//     getState: () => counterStateType
//   ) => {
//     const { counter } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }

// export function incrementAsync(delay: number = 1000) {
//   return (dispatch: (action: actionType) => void) => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, delay);
//   };
// }
