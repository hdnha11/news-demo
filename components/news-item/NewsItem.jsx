import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './news-item.scss';

const MEDIA_HOST = 'https://static01.nyt.com';

class NewsItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      snippet: PropTypes.string,
      multimedia: PropTypes.array,
      pubDate: PropTypes.string,
      source: PropTypes.string,
    }).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    selected: false,
  };

  toggle = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    const { item, className } = this.props;
    const {
      snippet, multimedia, pubDate, source,
    } = item;
    const [media] = multimedia.filter(m => m.subtype === 'mediumThreeByTwo440');

    return (
      <div
        className={classNames(styles.newsItem, className, {
          [styles.selected]: this.state.selected,
        })}
        onClick={this.toggle}
      >
        <div className={styles.snippet}>
          {snippet}
        </div>
        <div className={styles.publicDate}>
          {pubDate}
        </div>
        <div className={styles.source}>
          {source}
        </div>
        {media && (
          <img className={styles.media} src={`${MEDIA_HOST}/${media.url}`} alt={media.caption} />
        )}
      </div>
    );
  }
}

export default NewsItem;
