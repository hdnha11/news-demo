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

  it('should render an <time> tag', () => {
    expect(wrapper().type()).toEqual('time');
  });

  it('should render a prop', () => {
    props.id = 'testId';

    expect(wrapper().prop('id')).toEqual(props.id);
  });

  it('should render its text', () => {
    children = 'Text';

    expect(wrapper().contains(children)).toBe(true);
  });
});
