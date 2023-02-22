import { useState } from 'react';
import styled from 'styled-components';
import { PostFilterContainer } from '../module/post-filter';
import { PostListContainer } from '../module/post-list';
import { PostListDataContainer } from '../module/post-list-data';
export const CardList = () => {
  const [result, setResult] = useState<number>(0);
  return (
    <Container>
      <main>
        <h1>vikashyika</h1>
      </main>
      <Component>
        <PostListDataContainer />
        <PostFilterContainer setResult={setResult} />
        <PostListContainer result={result} />
      </Component>
    </Container>
  );
};

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px; ;
`;
const Container = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  padding-left: 25px;
  padding-right: 25px;
`;
