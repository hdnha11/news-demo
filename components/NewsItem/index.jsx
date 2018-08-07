import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Left from './Left';
import Right from './Right';
import Media from './Media';
import Date from '../Date';
import Title from '../Title';
import Paragraph from '../Paragraph';
import Source from '../Source';
import { MEDIA_HOST } from '../../config.json';

const NewsItem = ({ item, onClick }) => {
  const {
    headline, snippet, multimedia, pubDate, source, webUrl,
  } = item;
  const title = headline && headline.main;
  const media = multimedia && multimedia.find(m => m.subtype === 'square320');

  const handleClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <Wrapper>
      <Left>
        {title && <Title onClick={handleClick}>{title}</Title>}
        <Paragraph onClick={handleClick}>{snippet}</Paragraph>
        <Source href={webUrl}>{source}</Source>
        <Date>{pubDate}</Date>
      </Left>
      <Right>
        {media && (
          <Media
            src={`${MEDIA_HOST}/${media.url}`}
            alt={media.caption}
            onClick={handleClick}
          />
        )}
      </Right>
    </Wrapper>
  );
};

NewsItem.propTypes = {
  item: PropTypes.shape({
    snippet: PropTypes.string,
    multimedia: PropTypes.array,
    pubDate: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

NewsItem.defaultProps = {
  onClick: null,
};

export default NewsItem;
