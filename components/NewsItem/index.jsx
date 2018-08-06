import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Date from '../Date';

const MEDIA_HOST = 'https://static01.nyt.com';

const Wrapper = styled.article`
  display: flex;
  margin-bottom: 48px;
`;

const Left = styled.div`
  flex: 1 1 auto;
  margin-right: 24px;
`;

const Right = styled.div`
  flex: 0 0 auto;
  width: 150px;

  @media (max-width: 767px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 503px) {
    width: 80px;
    height: 80px;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const Paragraph = styled.p`
  font-weight: 300;
  margin: 6px 0 12px 0;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 0.875rem;
  }
`;

const Source = styled.a`
  display: block;
  color: inherit;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    font-size: 0.75rem;
  }
`;

const Media = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const NewsItem = ({ item, onClick }) => {
  const {
    headline, snippet, multimedia, pubDate, source, webUrl,
  } = item;
  const title = headline && headline.main;
  const [media] = multimedia.filter(m => m.subtype === 'square320');

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
