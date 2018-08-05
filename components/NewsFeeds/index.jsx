import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../NewsItem';

class NewsFeed extends Component {
  static propTypes = {
    newsItems: PropTypes.array,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    isFetching: PropTypes.bool,
    onSeeMoreClick: PropTypes.func,
  };

  static defaultProps = {
    newsItems: [],
    totalPages: 0,
    currentPage: 1,
    isFetching: false,
    onSeeMoreClick: null,
  };

  handleSeeMoreClick = event => {
    event.preventDefault();

    const { onSeeMoreClick } = this.props;

    if (onSeeMoreClick) {
      onSeeMoreClick();
    }
  };

  render() {
    const {
      newsItems, totalPages, currentPage, isFetching,
    } = this.props;

    return (
      <div>
        {newsItems.map(item => (
          <NewsItem key={item.id} item={item} />
        ))}
        {!isFetching &&
          currentPage < totalPages && (
            <a href="#see-more" onClick={this.handleSeeMoreClick}>
              See more...
            </a>
          )}
      </div>
    );
  }
}

export default NewsFeed;
