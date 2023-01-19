import Card from '@mui/material/Card';
import { Text } from '../../components/text';
import arrowIcon from '../../assets/icon/arrow_left.svg';
import { Link } from '@mui/material';
import styled, { css } from 'styled-components';
import { POST_ITEM_DATA_INTER } from './types';

export const CardItemElem: React.FC<POST_ITEM_DATA_INTER> = ({
  id,
  imageUrl,
  title,
  summary,
}) => {
  return (
    <div>
      <Image img={imageUrl} />
      <CardElem>
        <CardContent>
          <Title variant="heading">{title}</Title>
          <Text variant="content">{summary}</Text>
        </CardContent>
      </CardElem>
      <LinkContainer>
        <Link href="/">
          <img src={arrowIcon} />
          <Text variant="link">Back to homepage</Text>
        </Link>
      </LinkContainer>
    </div>
  );
};
const Image = styled.div<{ img: string | undefined }>`
  background: transparent no-repeat center;
  background-size: cover;
  ${({ img }) =>
    img &&
    css`
      background-image: url(${img});
    `}

  width: 100%;
  height: 245px;
`;
const CardElem = styled(Card)`
  margin: -20px 75px 0;
  @media (max-width: 700px) {
    margin: -20px 25px 0;
  }
`;
const Title = styled(Text)`
  text-align: center;
`;
const CardContent = styled.div`
  padding: 35px 75px 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 700px) {
    padding: 35px 25px 50px;
  }
`;
const LinkContainer = styled.div`
  padding-top: 35px;
  padding-left: 150px;
  @media (max-width: 700px) {
    padding-left: 50px;
  }
`;
