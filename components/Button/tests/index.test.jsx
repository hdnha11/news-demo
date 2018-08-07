import React from 'react';
import { mount } from 'enzyme';
import StyledButton from '../StyledButton';
import Button from '../index';

describe('<Button />', () => {
  let props;
  let children;
  let renderedButton;

  const button = () => {
    if (!renderedButton) {
      renderedButton = mount(<Button {...props}>{children}</Button>);
    }

    return renderedButton;
  };

  beforeEach(() => {
    props = {};
    children = 'My Button';
    renderedButton = undefined;
  });

  it('should render an StyledButton component', () => {
    expect(button().find(StyledButton).length).toEqual(1);
  });

  it('should contains children', () => {
    expect(button().contains(children)).toBe(true);
  });

  it('should pass props to StyledButton component', () => {
    props = { outline: true, big: true, onClick: () => {} };
    const wrapper = button()
      .find(StyledButton)
      .first();

    expect(wrapper.props().outline).toBe(props.outline);
    expect(wrapper.props().big).toBe(props.big);
    expect(wrapper.props().onClick).toBe(props.onClick);
  });
});
