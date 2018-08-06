import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/Modal';
import NewsFeeds from '../../components/NewsFeeds';
import NewsDetail from '../../components/NewsDetail';
import * as newsActionCreators from './actions';
import {
  getNewsItems,
  getCurrentPage,
  getTotalPages,
  getIsFetching,
  getCurrentNewsItem,
} from './selectors';

class HomePage extends Component {
  static propTypes = {
    newsItems: PropTypes.array,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    isFetching: PropTypes.bool,
    currentNewsItem: PropTypes.object,
    fetchNewsItems: PropTypes.func.isRequired,
    showNewsItem: PropTypes.func.isRequired,
    closeNewsItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    newsItems: [],
    totalPages: 0,
    currentPage: 1,
    isFetching: false,
    currentNewsItem: null,
  };

  componentDidMount() {
    const { fetchNewsItems } = this.props;

    fetchNewsItems();
  }

  readMore = () => {
    const { currentPage, fetchNewsItems } = this.props;

    fetchNewsItems({ page: currentPage + 1 });
  };

  showDetail = item => {
    const { showNewsItem } = this.props;

    showNewsItem(item);
  };

  closeDetail = () => {
    const { closeNewsItem } = this.props;

    closeNewsItem();
  };

  render() {
    const {
      newsItems,
      totalPages,
      currentPage,
      isFetching,
      currentNewsItem,
    } = this.props;

    return (
      <div>
        <NewsFeeds
          newsItems={newsItems}
          totalPages={totalPages}
          currentPage={currentPage}
          isFetching={isFetching}
          onReadMoreClick={this.readMore}
          onItemClick={this.showDetail}
        />

        {currentNewsItem && (
          <Modal onClose={this.closeDetail}>
            <NewsDetail item={currentNewsItem} />
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newsItems: getNewsItems(state),
  totalPages: getTotalPages(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  currentNewsItem: getCurrentNewsItem(state),
});

export default connect(
  mapStateToProps,
  newsActionCreators,
)(HomePage);
