import React from 'react';
import { shallow } from 'enzyme';
import ReadMore from '../ReadMore';

describe('<ReadMore />', () => {
  let props;
  let children;
  let renderedReadMore;

  const readMore = () => {
    if (!renderedReadMore) {
      renderedReadMore = shallow(<ReadMore {...props}>{children}</ReadMore>);
    }

    return renderedReadMore;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedReadMore = undefined;
  });

  it('should render an <div> tag', () => {
    expect(readMore().type()).toEqual('div');
  });

  it('should render its children', () => {
    children = <div>Content</div>;

    expect(readMore().contains(children)).toBe(true);
  });
});
