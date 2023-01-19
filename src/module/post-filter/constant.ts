import {
  POST_LIST_ITEM_DATA_INTER,
  POST_LIST_ITEM_DATA_RAW_INTER,
} from '../../models/card/types';

export const MODULE_NAME = 'POST_FILTER_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `REQUEST_PENDING`,
  SET_VALUE: `SET_VALUE`,
  SET_LIST: `SET_LIST`,
  RESET_STORE: `.RESET_STORE`,
};

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}

export const API = {
  TYPE: 'GET',
  URL: `https://api.spaceflightnewsapi.net/v3/articles/`,
};
export interface ACTION_RESPONSE_INTER {
  list: POST_LIST_ITEM_DATA_RAW_INTER[];
}

export interface STORE_INTER {
  inputValue: [];
  list: POST_LIST_ITEM_DATA_INTER[] | null;
}
