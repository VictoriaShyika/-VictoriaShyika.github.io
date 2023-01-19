import React from 'react';
import styled from 'styled-components';
import { CardElem } from '../../models/card';
import { Text } from '../../components/text';
import { Loader } from '../../components/loader';
export const Component: React.FC<{
  data?: any;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  result: number;
}> = ({ data, isLoading, isSuccess, result }) => {
  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && data && (
        <>
          <TextContainer>
            <Text variant="title">Results:</Text>
            <Text variant="title">{result}</Text>
          </TextContainer>
          <Container>
            {data.map((item: any) => (
              <React.Fragment key={item.id}>
                <CardElem {...item} />
              </React.Fragment>
            ))}
            {data.length == 0 && (
              <TextConteiner>
                <Text variant="heading">Nothing found</Text>
              </TextConteiner>
            )}
          </Container>
        </>
      )}
    </>
  );
};
const TextConteiner = styled.div`
  width: 90vw;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 45px;
  max-width: 1330px;
  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
const TextContainer = styled.div`
  display: flex;
  height: 25px;
  border-bottom: 1px solid #eaeaea;
`;
