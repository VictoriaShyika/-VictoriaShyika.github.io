import { AnyAction } from 'redux';

import {
  useDispatch as useDispatchOrigin,
  useSelector as useSelectorOrigin,
  TypedUseSelectorHook,
} from 'react-redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { reducers, store } from './index';

/* Types */
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;
export type Dispatch = ThunkDispatch<RootState, any, AnyAction>;
export type Action<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
export const useDispatch = () => useDispatchOrigin<Dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorOrigin;

export type ActionData<T> = {
  type: string;
  data: T;
};

export type GetState = () => RootState;
