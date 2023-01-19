import { API } from './constant';
import { HttpRequest } from '../../lib/http';

export const action = (itemId: number) => {
  return HttpRequest({
    method: API.TYPE,
    url: API.URL(itemId),
  });
};
