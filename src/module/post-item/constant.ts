import {
  POST_ITEM_DATA_RAW_INTER,
  POST_ITEM_DATA_INTER,
} from '../../models/card-item/types';

export const MODULE_NAME = 'SPRAV_ITEM_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export const API = {
  TYPE: 'GET',
  URL: (itemId: number) =>
    `https://api.spaceflightnewsapi.net/v3/articles/${itemId}`,
};

export interface ACTION_RESPONSE_INTER {
  data: POST_ITEM_DATA_RAW_INTER;
}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}

export interface DATA_INTER {
  data: POST_ITEM_DATA_INTER;
}
