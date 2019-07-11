import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import gamesReducer from './reducers/gamesReducer';


export const reducer = combineReducers({
  games: gamesReducer,
});


const store = createStore(
  reducer,
  composeWithDevTools(),
);

export default store;
