import React from 'react';
import { mount } from 'enzyme';
import NewsFeeds from '../../../components/NewsFeeds';
import NewsItem from '../../../components/NewsItem';
import NewsDetail from '../../../components/NewsDetail';
import Modal from '../../../components/Modal';
import { HomePage } from '../index';

describe('<HomePage />', () => {
  let props;
  let children;
  let renderedHomePage;

  const homePage = () => {
    if (!renderedHomePage) {
      renderedHomePage = mount(<HomePage {...props}>{children}</HomePage>);
    }

    return renderedHomePage;
  };

  beforeEach(() => {
    props = {
      newsItems: undefined,
      totalPages: undefined,
      currentPage: undefined,
      isFetching: undefined,
      currentNewsItem: undefined,
      fetchNewsItems: jest.fn(),
      showNewsItem: jest.fn(),
      closeNewsItem: jest.fn(),
    };
    children = undefined;
    renderedHomePage = undefined;
  });

  it('should render an NewsFeeds component', () => {
    expect(homePage().find(NewsFeeds).length).toEqual(1);
  });

  it('should not show detail modal if currentNewsItem was missing', () => {
    expect(homePage().find(NewsDetail).length).toEqual(0);
  });

  it('should show detail modal if currentNewsItem was presented', () => {
    props.currentNewsItem = {
      headline: undefined,
      snippet: 'Snippet',
      multimedia: undefined,
      pubDate: '2018-06-01T00:00:00+0000',
      source: 'Source',
      webUrl: 'fake-url',
    };

    expect(homePage().find(NewsDetail).length).toEqual(1);
  });

  it('should handle show news item event', () => {
    props.newsItems = [{
      id: 1,
      headline: undefined,
      snippet: 'Snippet',
      multimedia: undefined,
      pubDate: '2018-06-01T00:00:00+0000',
      source: 'Source',
      webUrl: 'fake-url',
    }];
    const itemSnippet = homePage()
      .find(NewsItem)
      .find('Paragraph')
      .first();

    itemSnippet.simulate('click');

    expect(props.showNewsItem).toHaveBeenCalledWith(props.newsItems[0]);
  });

  it('should handle modal close event', () => {
    props.currentNewsItem = {
      headline: undefined,
      snippet: 'Snippet',
      multimedia: undefined,
      pubDate: '2018-06-01T00:00:00+0000',
      source: 'Source',
      webUrl: 'fake-url',
    };
    const closeBtn = homePage()
      .find(Modal)
      .find('Icon')
      .first();

    closeBtn.simulate('click');

    expect(props.closeNewsItem).toHaveBeenCalled();
  });

  it('should handle read more event', () => {
    props.currentNewsItem = {
      headline: undefined,
      snippet: 'Snippet',
      multimedia: undefined,
      pubDate: '2018-06-01T00:00:00+0000',
      source: 'Source',
      webUrl: 'fake-url',
    };
    props.currentPage = 1;
    props.totalPages = 2;
    const readMoreBtn = homePage()
      .find(NewsFeeds)
      .find('ReadMore')
      .find('Button')
      .first();

    readMoreBtn.simulate('click');

    expect(props.fetchNewsItems).toHaveBeenCalledWith({
      page: props.currentPage + 1,
    });
  });
});
