import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsFeeds from '../../components/NewsFeeds';
import * as newsActionCreators from './actions';
import {
  getNewsItems,
  getCurrentPage,
  getTotalPages,
  getIsFetching,
} from './selectors';

class HomePage extends Component {
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

  readMore = () => {
    const { currentPage, fetchNewsItems } = this.props;

    fetchNewsItems({ page: currentPage + 1 });
  };

  render() {
    const {
      newsItems, totalPages, currentPage, isFetching,
    } = this.props;

    return (
      <div>
        <NewsFeeds
          newsItems={newsItems}
          totalPages={totalPages}
          currentPage={currentPage}
          isFetching={isFetching}
          onReadMoreClick={this.readMore}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newsItems: getNewsItems(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
});

export default connect(
  mapStateToProps,
  newsActionCreators,
)(HomePage);
