import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Date from '../Date';
import Title from '../Title';
import Paragraph from '../Paragraph';
import Source from '../Source';
import { MEDIA_HOST } from '../../config.json';

const Wrapper = styled.article`
  margin: 0;
  padding: 0 32px 32px 32px;
`;

const Media = styled.img`
  width: 100%;
  margin: 36px 0 20px 0;
`;

const NewsDetail = ({ item }) => {
  const {
    headline, snippet, multimedia, pubDate, source, webUrl,
  } = item;
  const title = headline && headline.main;
  const [media] = multimedia.filter(m => m.subtype === 'largeWidescreen1050');

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      {media && (
        <Media src={`${MEDIA_HOST}/${media.url}`} alt={media.caption} />
      )}

      <Paragraph>{snippet}</Paragraph>

      <Source href={webUrl}>{source}</Source>
      <Date>{pubDate}</Date>
    </Wrapper>
  );
};

NewsDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NewsDetail;
