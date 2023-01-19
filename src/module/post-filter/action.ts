import { Dispatch } from '../../store';
import { ACTION_TYPE, API } from './constant';
import { HttpRequest } from '../../lib/http';
import { POST_LIST_ITEM_DATA_INTER } from '../../models/card/types';

export const action = () => {
  return HttpRequest({
    method: API.TYPE,
    url: API.URL,
  });
};

export const setValue = (data: string) => async (dispatch: Dispatch) => {
  return dispatch({
    type: ACTION_TYPE.SET_VALUE,
    data,
  });
};

export const setList =
  (data: POST_LIST_ITEM_DATA_INTER[]) => async (dispatch: Dispatch) => {
    return dispatch({
      type: ACTION_TYPE.SET_LIST,
      data,
    });
  };

export const resetStore = () => async (dispatch: Dispatch) => {
  return dispatch({
    type: ACTION_TYPE.RESET_STORE,
  });
};
