import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import { app, home } from './modules';

const middlewares = applyMiddleware(
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
  }),
  logger,
);

export default (data = {}) => {
  const rootReducer = combineReducers({
    [app.NAME]: app.reducer,
    [home.NAME]: home.reducer,
  });

  return createStore(rootReducer, data, middlewares);
};
