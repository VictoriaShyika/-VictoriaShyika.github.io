import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Text } from '../../components/text';
import arrowIcon from '../../assets/icon/arrow.svg';
import calendarIcon from '../../assets/icon/calendar.svg';
import { Link } from '@mui/material';
import styled from 'styled-components';
import { useSelector } from '../../store';
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import { POST_LIST_ITEM_DATA_INTER } from './types';

export const CardElem: React.FC<POST_LIST_ITEM_DATA_INTER> = ({
  title,
  summary,
  imageUrl,
  publishedAt,
  id,
}) => {
  const { state } = useSelector((s: any) => ({
    state: s.articles,
  }));

  return (
    <Card>
      <CardMedia image={imageUrl} />
      <CardContent>
        <Date>
          <img src={calendarIcon} />
          <Text variant="date">
            {moment(publishedAt).format('MMM Do, YYYY')}
          </Text>
        </Date>
        <Text variant="heading">
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={state.inputValue}
            autoEscape={true}
            textToHighlight={title}
          />
          {title}
        </Text>
        <Text variant="content">
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={state.inputValue}
            autoEscape={true}
            textToHighlight={summary}
          />
          {summary.split('').length < 100
            ? summary
            : `${summary.substring(0, 100)}...`}
        </Text>
        <Link href={`/card-item/${id}`}>
          <Text variant="link">Read more</Text>
          <img src={arrowIcon} />
        </Link>
      </CardContent>
    </Card>
  );
};
const Date = styled.div`
  display: flex;
  gap: 8px;
`;
