import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export const Loader: React.FC = () => {
  return (
    <DarkBG>
      <Centered>
        <Box>
          <CircularProgress />
        </Box>
      </Centered>
    </DarkBG>
  );
};

const DarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
