import React from 'react';
import { shallow } from 'enzyme';
import Right from '../Right';

describe('<Right />', () => {
  let props;
  let children;
  let renderedRight;

  const right = () => {
    if (!renderedRight) {
      renderedRight = shallow(<Right {...props}>{children}</Right>);
    }

    return renderedRight;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedRight = undefined;
  });

  it('should render an <div> tag', () => {
    expect(right().type()).toEqual('div');
  });

  it('should render its children', () => {
    children = <div>Content</div>;

    expect(right().contains(children)).toBe(true);
  });
});
