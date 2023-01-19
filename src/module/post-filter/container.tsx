import React, { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { CustomizedInputBase } from '../../components/searchField';
import { Text } from '../../components/text';
import { useDispatch, useSelector } from '../../store';
import { POST_LIST_DATA_MODULE_NAME } from '../post-list-data';
import { resetStore, setValue } from './action';
import { filter } from './core';

export const Container: React.FC<{ setResult: Function }> = ({ setResult }) => {
  const dispatch = useDispatch();
  const preFetch = useQuery(POST_LIST_DATA_MODULE_NAME);
  const queryClient = useQueryClient();

  const isSuccess = () => {
    if (preFetch.isSuccess) {
      return true;
    }
  };

  const { state } = useSelector((s: any) => ({
    state: s.articles,
  }));

  const filterData = (value: string) => {
    const newData = filter(state.list, value);
    setResult(value.length ? newData.length : 0);
    queryClient.setQueryData(POST_LIST_DATA_MODULE_NAME, [...newData]);
  };

  useEffect(() => {
    return () => {
      dispatch(resetStore());
    };
  }, []);

  const onChange = (e: any) => {
    dispatch(setValue(e.target.value.split(' ')));
    filterData(e.target.value);
  };

  return (
    <React.Fragment>
      {isSuccess() && (
        <Content>
          <Text variant="title">Filter by keywords</Text>
          <CustomizedInputBase onChange={onChange} />
        </Content>
      )}
    </React.Fragment>
  );
};
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
