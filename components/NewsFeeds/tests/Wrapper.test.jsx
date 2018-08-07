import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  let props;
  let children;
  let renderedWrapper;

  const wrapper = () => {
    if (!renderedWrapper) {
      renderedWrapper = shallow(<Wrapper {...props}>{children}</Wrapper>);
    }

    return renderedWrapper;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedWrapper = undefined;
  });

  it('should render an <div> tag', () => {
    expect(wrapper().type()).toEqual('div');
  });

  it('should render its children', () => {
    children = <div>Content</div>;

    expect(wrapper().contains(children)).toBe(true);
  });
});
