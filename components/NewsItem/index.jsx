import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MEDIA_HOST = 'https://static01.nyt.com';

class NewsItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      snippet: PropTypes.string,
      multimedia: PropTypes.array,
      pubDate: PropTypes.string,
      source: PropTypes.string,
    }).isRequired,
  };

  showDetail = () => {
  };

  render() {
    const { item } = this.props;
    const {
      snippet, multimedia, pubDate, source,
    } = item;
    const [media] = multimedia.filter(m => m.subtype === 'mediumThreeByTwo440');

    return (
      <div
        onClick={this.showDetail}
      >
        <div>
          {snippet}
        </div>
        <div>
          {pubDate}
        </div>
        <div>
          {source}
        </div>
        {media && (
          <img src={`${MEDIA_HOST}/${media.url}`} alt={media.caption} />
        )}
      </div>
    );
  }
}

export default NewsItem;
