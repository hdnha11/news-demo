import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../index';

describe('<Icon />', () => {
  let props;
  let children;
  let renderedIcon;

  const icon = () => {
    if (!renderedIcon) {
      renderedIcon = shallow(<Icon {...props}>{children}</Icon>);
    }

    return renderedIcon;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedIcon = undefined;
  });

  it('should render an <i> tag', () => {
    expect(icon().type()).toEqual('i');
  });

  it('should have material icons class', () => {
    expect(icon().prop('className')).toMatch(/material-icons/);
  });

  it('should render its children', () => {
    children = 'close';

    expect(icon().contains(children)).toBe(true);
  });
});
