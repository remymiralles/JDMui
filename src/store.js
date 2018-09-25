import { createStore, combineReducers } from 'redux';

import { home, game } from './reducers';

const reducers = combineReducers({
  home, game
});

const store = createStore(reducers);

export default store;
