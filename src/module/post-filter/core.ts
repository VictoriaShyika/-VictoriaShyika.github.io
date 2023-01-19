import { POST_LIST_ITEM_DATA_INTER } from '../../models/card/types';

export const filter = (list: POST_LIST_ITEM_DATA_INTER[], value: string) => {
  const keyArray = value.split(' ');
  const array: any = [];

  keyArray.map((word) =>
    list.map((item) => {
      if (item.title?.toLowerCase().includes(word.toLowerCase())) {
        array.push(item);
      }
    }),
  );
  keyArray.map((word) =>
    list.map((item) => {
      if (item.summary?.toLowerCase().includes(word.toLowerCase())) {
        if (!array.includes(item)) {
          array.push(item);
        }
      }
    }),
  );

  return array;
};
