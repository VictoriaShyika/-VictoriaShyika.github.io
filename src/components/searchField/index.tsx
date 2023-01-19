import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import searchIcon from '../../assets/icon/search.svg';
import styled from '@emotion/styled';

export const CustomizedInputBase: React.FC<{ onChange: Function }> = ({
  onChange,
}) => {
  return (
    <Container>
      <Paper onChange={(e) => onChange(e)} component="form">
        <img src={searchIcon} />
        <Input placeholder="Search articles by keywords" />
      </Paper>
    </Container>
  );
};
const Input = styled(InputBase)`
  & > * {
    width: 100%;
    padding: 0px;
    height: 24px;
  }
`;
const Container = styled.div`
  width: 70vw;
`;
