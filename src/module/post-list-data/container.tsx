import React from 'react';
import { POST_LIST_DATA_MODULE_NAME } from '.';
import { useQuery } from 'react-query';
import { action } from './action';
import { useDispatch, useSelector } from '../../store';
import { setList } from '../post-filter/action';

export const Container: React.FC = () => {
  const { state } = useSelector((s: any) => ({
    state: s.articles,
  }));

  const onSuccess = (d: any) => {
    if (!state.list) {
      dispatch(setList(d));
    }
  };
  const preFetch = useQuery(
    POST_LIST_DATA_MODULE_NAME,
    () => action().then((res: any) => res.data),

    {
      onSuccess,
    },
  );
  const dispatch = useDispatch();

  return <React.Fragment></React.Fragment>;
};
