import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as newsActionCreators from '../../actions/news';
import NewsItem from '../news-item';
import styles from './news-feed.scss';

class NewsFeed extends Component {
  static propTypes = {
    newsItems: PropTypes.array,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    isFetching: PropTypes.bool,
    fetchNewsItems: PropTypes.func.isRequired,
  };

  static defaultProps = {
    newsItems: [],
    totalPages: 0,
    currentPage: 1,
    isFetching: false,
  };

  componentDidMount() {
    const { fetchNewsItems } = this.props;

    fetchNewsItems();
  }

  seeMore = event => {
    event.preventDefault();

    const { currentPage, fetchNewsItems } = this.props;

    fetchNewsItems({ page: currentPage + 1 });
  };

  render() {
    const {
      newsItems, totalPages, currentPage, isFetching,
    } = this.props;

    return (
      <div className={styles.newsFeed}>
        {newsItems.map(item => (
          <NewsItem className={styles.item} key={item.id} item={item} />
        ))}
        {!isFetching &&
          currentPage < totalPages && (
            <a className={styles.seeMore} href="#see-more" onClick={this.seeMore}>
              See more...
            </a>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newsItems: state.newsItems.all,
  totalPages: state.newsItems.totalPages,
  currentPage: state.newsItems.currentPage,
  isFetching: state.newsItems.isFetching,
});

export default connect(mapStateToProps, newsActionCreators)(NewsFeed);
