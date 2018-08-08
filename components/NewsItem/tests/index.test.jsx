import React from 'react';
import { mount } from 'enzyme';
import Wrapper from '../Wrapper';
import Left from '../Left';
import Right from '../Right';
import Media from '../Media';
import Date from '../../Date';
import Title from '../../Title';
import Paragraph from '../../Paragraph';
import Source from '../../Source';
import NewsItem from '../index';
import { MEDIA_HOST } from '../../../config.json';

describe('<NewsItem />', () => {
  let props;
  let children;
  let renderedNewsItem;

  const newsItem = () => {
    if (!renderedNewsItem) {
      renderedNewsItem = mount(<NewsItem {...props}>{children}</NewsItem>);
    }

    return renderedNewsItem;
  };

  beforeEach(() => {
    props = {
      item: {
        headline: undefined,
        snippet: 'Snippet',
        multimedia: undefined,
        pubDate: '2018-06-01T00:00:00+0000',
        source: 'Source',
        webUrl: 'fake-url',
      },
      onClick: undefined,
    };
    children = undefined;
    renderedNewsItem = undefined;
  });

  it('should render an Wrapper component', () => {
    expect(newsItem().find(Wrapper).length).toEqual(1);
  });

  it('should render an Left component', () => {
    expect(newsItem().find(Left).length).toEqual(1);
  });

  it('should render an Right component', () => {
    expect(newsItem().find(Right).length).toEqual(1);
  });

  it('should render an Source component with url on the left', () => {
    const source = newsItem().find(Left).find(Source);

    expect(source.length).toEqual(1);
    expect(source.first().contains(props.item.source)).toBe(true);
    expect(source.first().props().href).toEqual(props.item.webUrl);
  });

  it('should render an Date component with valid format on the left', () => {
    const date = newsItem().find(Left).find(Date);

    expect(date.length).toEqual(1);
    expect(date.first().contains('Jun 01, 2018')).toBe(true);
  });

  it('should render snippet inside Paragraph component on the left', () => {
    const snippet = newsItem().find(Left).find(Paragraph);

    expect(snippet.length).toEqual(1);
    expect(snippet.first().contains(props.item.snippet)).toBe(true);
  });

  it('should not render Title component if headline attr is missing', () => {
    expect(newsItem().find(Title).length).toEqual(0);
  });

  it('should not render Title component if headline.main is missing', () => {
    props.item.headline = { fake: 'field' };

    expect(newsItem().find(Title).length).toEqual(0);
  });

  it('should render Title component on the left if headline.main was provided', () => {
    props.item.headline = { main: 'Title' };
    const titles = newsItem().find(Left).find(Title);

    expect(titles.length).toEqual(1);
    expect(titles.first().contains(props.item.headline.main)).toBe(true);
  });

  it('should not render Media component if multimedia is missing', () => {
    expect(newsItem().find(Media).length).toEqual(0);
  });

  it('should not render Media component if multimedia with subtype=square320 is missing', () => {
    props.item.multimedia = [{ subtype: 'something' }];

    expect(newsItem().find(Media).length).toEqual(0);
  });

  it('should render Media component on the right if multimedia with subtype=square320 was provided', () => {
    const url = 'media-url';
    props.item.multimedia = [
      { subtype: 'square320', url },
    ];
    const media = newsItem().find(Right).find(Media);

    expect(media.length).toEqual(1);
    expect(media.first().props().src).toBe(`${MEDIA_HOST}/${url}`);
  });

  it('should not throw if click on snippet but callback is undefined', () => {
    const snippet = newsItem().find(Paragraph).first();

    snippet.simulate('click');
  });

  it('should handle click event on snippet', () => {
    props.onClick = jest.fn();
    const snippet = newsItem().find(Paragraph).first();

    snippet.simulate('click');

    expect(props.onClick).toHaveBeenCalledWith(props.item);
  });

  it('should handle click event on title', () => {
    props.onClick = jest.fn();
    props.item.headline = { main: 'Title' };
    const title = newsItem().find(Title).first();

    title.simulate('click');

    expect(props.onClick).toHaveBeenCalledWith(props.item);
  });

  it('should handle click event on media', () => {
    props.onClick = jest.fn();
    props.item.multimedia = [
      { subtype: 'square320', url: 'url' },
    ];
    const media = newsItem().find(Media).first();

    media.simulate('click');

    expect(props.onClick).toHaveBeenCalledWith(props.item);
  });
});
