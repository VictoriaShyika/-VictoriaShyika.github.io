import React from 'react';
import { useParams } from 'react-router-dom';
import { CardItemContainer } from '../module/post-item';

export const CardItem: React.FC = () => {
  let { id } = useParams();

  return <CardItemContainer itemId={id} />;
};
