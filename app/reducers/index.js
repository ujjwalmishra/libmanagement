// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import user from './user';
import search from './search';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  counter,
  router,
  user,
  search,
  form: formReducer,
});

export default rootReducer;
