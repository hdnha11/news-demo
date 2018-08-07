import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Media from './Media';
import Date from '../Date';
import Title from '../Title';
import Paragraph from '../Paragraph';
import Source from '../Source';
import { MEDIA_HOST } from '../../config.json';

const NewsDetail = ({ item }) => {
  const {
    headline, snippet, multimedia, pubDate, source, webUrl,
  } = item;
  const title = headline && headline.main;
  const media = multimedia && multimedia.find(m => m.subtype === 'largeWidescreen1050');

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
