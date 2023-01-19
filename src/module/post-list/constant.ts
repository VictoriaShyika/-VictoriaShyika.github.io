import {
  POST_LIST_ITEM_DATA_RAW_INTER,
  POST_LIST_ITEM_DATA_INTER,
} from '../../models/card/types';

export const MODULE_NAME = 'POST_LIST';

export const ACTION_TYPE = {
  REQUEST_PENDING: `POST_LIST.REQUEST_PENDING`,
};

export const API = {
  TYPE: 'GET',
  URL: `https://api.spaceflightnewsapi.net/v3/articles/`,
};

export interface ACTION_RESPONSE_INTER {
  list: POST_LIST_ITEM_DATA_RAW_INTER[];
}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}

export interface DATA_INTER {
  isEmpty: boolean;
  list: POST_LIST_ITEM_DATA_INTER[];
}
