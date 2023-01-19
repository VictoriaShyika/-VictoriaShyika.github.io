import { ActionData } from '../../store/core';
import { ACTION_TYPE, STORE_INTER } from './constant';

const initialState: STORE_INTER = {
  inputValue: [],
  list: null,
};

export function Store(state = initialState, action: ActionData<{}>) {
  switch (action.type) {
    case ACTION_TYPE.SET_VALUE:
      return {
        ...state,
        inputValue: action.data,
      };
    case ACTION_TYPE.SET_LIST:
      return {
        ...state,
        list: action.data,
      };
    case ACTION_TYPE.RESET_STORE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
