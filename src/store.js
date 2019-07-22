import { combineReducers, createStore } from 'redux/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import gamesReducer from './components/Games/reducers/gamesReducer';


export const reducer = combineReducers({
  games: gamesReducer,
});


const store = createStore(
  reducer,
  composeWithDevTools(),
);

export default store;
