import React from 'react';
import { shallow } from 'enzyme';
import Left from '../Left';

describe('<Left />', () => {
  let props;
  let children;
  let renderedLeft;

  const left = () => {
    if (!renderedLeft) {
      renderedLeft = shallow(<Left {...props}>{children}</Left>);
    }

    return renderedLeft;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedLeft = undefined;
  });

  it('should render an <div> tag', () => {
    expect(left().type()).toEqual('div');
  });

  it('should render its children', () => {
    children = <div>Content</div>;

    expect(left().contains(children)).toBe(true);
  });
});
