import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Store } from '../module/post-filter/store';

const initialState = {};

export const reducers = combineReducers({
  articles: Store,
});

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk),
);
export { useDispatch } from './core';
export { useSelector } from './core';

export type { Action, Dispatch, GetState } from './core';
