import React from 'react';
import { mount } from 'enzyme';
import Wrapper from '../Wrapper';
import Title from '../../Title';
import Button from '../../Button';
import PlaceholderLoading from '../../PlaceholderLoading';
import NewsItem from '../../NewsItem';
import ReadMore from '../ReadMore';
import NewsFeed from '../index';

describe('<NewsFeed />', () => {
  let props;
  let children;
  let renderedNewsFeed;

  const newsFeed = () => {
    if (!renderedNewsFeed) {
      renderedNewsFeed = mount(<NewsFeed {...props}>{children}</NewsFeed>);
    }

    return renderedNewsFeed;
  };

  beforeEach(() => {
    props = {
      newsItems: undefined,
      totalPages: undefined,
      currentPage: undefined,
      isFetching: undefined,
      onReadMoreClick: undefined,
      onItemClick: undefined,
    };
    children = undefined;
    renderedNewsFeed = undefined;
  });

  it('should render an Wrapper component', () => {
    expect(newsFeed().find(Wrapper).length).toEqual(1);
  });

  it('should not render any news items if missing newsItems', () => {
    expect(newsFeed().find(NewsItem).length).toEqual(0);
  });

  it('should not render any news items if newsItems is empty', () => {
    props.newsItems = [];

    expect(newsFeed().find(NewsItem).length).toEqual(0);
  });

  it('should render news items if newsItems was provided', () => {
    props.newsItems = [{
      id: 1,
      headline: undefined,
      snippet: 'Snippet #1',
      multimedia: undefined,
      pubDate: '2018-06-01T00:00:00+0000',
      source: 'Source #1',
      webUrl: 'fake-url-1',
    }, {
      id: 2,
      headline: undefined,
      snippet: 'Snippet #2',
      multimedia: undefined,
      pubDate: '2018-06-02T00:00:00+0000',
      source: 'Source #2',
      webUrl: 'fake-url-2',
    }];
    const newsItems = newsFeed().find(NewsItem);

    expect(newsItems.length).toEqual(2);
    expect(newsItems.get(0).props.item).toEqual(props.newsItems[0]);
    expect(newsItems.get(1).props.item).toEqual(props.newsItems[1]);
  });

  it('should not throw if click on item but callback is undefined', () => {
    props.newsItems = [{
      id: 1,
      headline: { main: 'Title' },
      snippet: 'Snippet #1',
      multimedia: undefined,
      pubDate: '2018-06-01T00:00:00+0000',
      source: 'Source #1',
      webUrl: 'fake-url-1',
    }];
    const newsItem = newsFeed().find(NewsItem).first();
    const itemTitle = newsItem.find(Title).first();

    itemTitle.simulate('click');
  });

  it('should handle click on item', () => {
    props.onItemClick = jest.fn();
    props.newsItems = [{
      id: 1,
      headline: { main: 'Title' },
      snippet: 'Snippet #1',
      multimedia: undefined,
      pubDate: '2018-06-01T00:00:00+0000',
      source: 'Source #1',
      webUrl: 'fake-url-1',
    }];
    const newsItem = newsFeed().find(NewsItem).first();
    const itemTitle = newsItem.find(Title).first();

    itemTitle.simulate('click');

    expect(props.onItemClick).toHaveBeenCalledWith(props.newsItems[0]);
  });

  it('should show loading state if fetching data', () => {
    props.isFetching = true;

    expect(newsFeed().find(PlaceholderLoading).length).toEqual(1);
  });

  it('should not show loading state if not fetching data', () => {
    props.isFetching = false;

    expect(newsFeed().find(PlaceholderLoading).length).toEqual(0);
  });

  it('should show read more button if currentPage < totalPages and not fetching data', () => {
    props.isFetching = false;
    props.currentPage = 10;
    props.totalPages = 11;

    expect(newsFeed().find(ReadMore).length).toEqual(1);
    expect(newsFeed().find(ReadMore).find(Button).length).toEqual(1);
  });

  it('should not show read more button if currentPage >= totalPages', () => {
    props.isFetching = false;
    props.currentPage = 10;
    props.totalPages = 10;

    expect(newsFeed().find(ReadMore).length).toEqual(0);
  });

  it('should not show read more button if fetching data', () => {
    props.isFetching = true;
    props.currentPage = 10;
    props.totalPages = 11;

    expect(newsFeed().find(ReadMore).length).toEqual(0);
  });

  it('should not throw if click on read more button but callback is undefined', () => {
    props.isFetching = false;
    props.currentPage = 10;
    props.totalPages = 11;
    const readMoreBtn = newsFeed().find(ReadMore).find(Button).first();

    readMoreBtn.simulate('click');
  });

  it('should handle click on read more button', () => {
    props.onReadMoreClick = jest.fn();
    props.isFetching = false;
    props.currentPage = 10;
    props.totalPages = 11;
    const readMoreBtn = newsFeed().find(ReadMore).find(Button).first();

    readMoreBtn.simulate('click');

    expect(props.onReadMoreClick).toHaveBeenCalled();
  });
});
