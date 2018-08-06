import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlaceholderLoading from '../PlaceholderLoading';
import NewsItem from '../NewsItem';
import Button from '../Button';
import placeholderImage from '../../images/news-loading.svg';

const Wrapper = styled.div`
  padding: 16px;
`;

const ReadMore = styled.div`
  text-align: center;
`;

const LoadingImage = styled.img`
  margin-bottom: 48px;
  width: 100%;
`;

class NewsFeed extends Component {
  static propTypes = {
    newsItems: PropTypes.array,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    isFetching: PropTypes.bool,
    onReadMoreClick: PropTypes.func,
    onItemClick: PropTypes.func,
  };

  static defaultProps = {
    newsItems: [],
    totalPages: 0,
    currentPage: 1,
    isFetching: false,
    onReadMoreClick: null,
    onItemClick: null,
  };

  handleReadMoreClick = event => {
    event.preventDefault();

    const { onReadMoreClick } = this.props;

    if (onReadMoreClick) {
      onReadMoreClick();
    }
  };

  handleItemClick = item => {
    const { onItemClick } = this.props;

    if (onItemClick) {
      onItemClick(item);
    }
  };

  render() {
    const {
      newsItems, totalPages, currentPage, isFetching,
    } = this.props;

    return (
      <Wrapper>
        {newsItems.map(item => (
          <NewsItem key={item.id} item={item} onClick={this.handleItemClick} />
        ))}
        {isFetching && (
          <PlaceholderLoading>
            <LoadingImage src={placeholderImage} alt="Loading" />
            <LoadingImage src={placeholderImage} alt="Loading" />
          </PlaceholderLoading>
        )}
        {!isFetching &&
          currentPage < totalPages && (
            <ReadMore>
              <Button big outline onClick={this.handleReadMoreClick}>
                Read More
              </Button>
            </ReadMore>
          )}
      </Wrapper>
    );
  }
}

export default NewsFeed;
