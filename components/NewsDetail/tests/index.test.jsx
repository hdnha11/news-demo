import React from 'react';
import { mount } from 'enzyme';
import Wrapper from '../Wrapper';
import Media from '../Media';
import Date from '../../Date';
import Title from '../../Title';
import Paragraph from '../../Paragraph';
import Source from '../../Source';
import NewsDetail from '../index';
import { MEDIA_HOST } from '../../../config.json';

describe('<NewsDetail />', () => {
  let props;
  let children;
  let renderedNewsDetail;

  const newsDetail = () => {
    if (!renderedNewsDetail) {
      renderedNewsDetail = mount(<NewsDetail {...props}>{children}</NewsDetail>);
    }

    return renderedNewsDetail;
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
    };
    children = undefined;
    renderedNewsDetail = undefined;
  });

  it('should render an Wrapper component', () => {
    expect(newsDetail().find(Wrapper).length).toEqual(1);
  });

  it('should render an Source component with url', () => {
    const source = newsDetail().find(Source);

    expect(source.length).toEqual(1);
    expect(source.first().contains(props.item.source)).toBe(true);
    expect(source.first().props().href).toEqual(props.item.webUrl);
  });

  it('should render an Date component with valid format', () => {
    const date = newsDetail().find(Date);

    expect(date.length).toEqual(1);
    expect(date.first().contains('Jun 01, 2018')).toBe(true);
  });

  it('should render snippet inside Paragraph component', () => {
    const snippet = newsDetail().find(Paragraph);

    expect(snippet.length).toEqual(1);
    expect(snippet.first().contains(props.item.snippet)).toBe(true);
  });

  it('should not render Title component if headline attr is missing', () => {
    expect(newsDetail().find(Title).length).toEqual(0);
  });

  it('should not render Title component if headline.main is missing', () => {
    props.item.headline = { fake: 'field' };

    expect(newsDetail().find(Title).length).toEqual(0);
  });

  it('should render Title component if headline.main was provided', () => {
    props.item.headline = { main: 'Title' };
    const titles = newsDetail().find(Title);

    expect(titles.length).toEqual(1);
    expect(titles.first().contains(props.item.headline.main)).toBe(true);
  });

  it('should not render Media component if multimedia is missing', () => {
    expect(newsDetail().find(Media).length).toEqual(0);
  });

  it('should not render Media component if multimedia with subtype=largeWidescreen1050 is missing', () => {
    props.item.multimedia = [{ subtype: 'something' }];

    expect(newsDetail().find(Media).length).toEqual(0);
  });

  it('should render Media component if multimedia with subtype=largeWidescreen1050 was provided', () => {
    const url = 'media-url';
    props.item.multimedia = [
      { subtype: 'largeWidescreen1050', url },
    ];
    const media = newsDetail().find(Media);

    expect(media.length).toEqual(1);
    expect(media.first().props().src).toBe(`${MEDIA_HOST}/${url}`);
  });
});
