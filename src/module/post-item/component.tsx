import React from 'react';
import styled from 'styled-components';
import { CardItemElem } from '../../models/card-item';
import { Loader } from '../../components/loader';
import { DATA_INTER } from './constant';

export const Component: React.FC<{
  data?: DATA_INTER;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}> = ({ data, isLoading, isSuccess, isError, errorMessage }) => {
  return (
    <Container>
      {isLoading && <Loader />}

      {isSuccess && data && <CardItemElem {...data.data} />}
    </Container>
  );
};

const Container = styled.div``;
