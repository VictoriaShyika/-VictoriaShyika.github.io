export interface POST_LIST_ITEM_DATA_RAW_INTER {
  id: number;
  title: string;
  url: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
}

export interface POST_LIST_ITEM_DATA_INTER
  extends POST_LIST_ITEM_DATA_RAW_INTER {}
