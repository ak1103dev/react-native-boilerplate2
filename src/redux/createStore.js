import { createStore, combineReducers } from 'redux';

import { app, home } from './modules';

export default (data = {}) => {
  const rootReducer = combineReducers({
    [app.NAME]: app.reducer,
    [home.NAME]: home.reducer,
  });

  return createStore(rootReducer, data);
};
