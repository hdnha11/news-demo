import React from 'react';
import { mount } from 'enzyme';
import Wrapper from '../Wrapper';
import Main from '../Main';
import Logo from '../Logo';
import Header from '../index';

describe('<Header />', () => {
  let props;
  let children;
  let renderedHeader;

  const date = () => {
    if (!renderedHeader) {
      renderedHeader = mount(<Header {...props}>{children}</Header>);
    }

    return renderedHeader;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedHeader = undefined;
  });

  it('should render an Wrapper component', () => {
    expect(date().find(Wrapper).length).toEqual(1);
  });

  it('should render an Main component', () => {
    expect(date().find(Main).length).toEqual(1);
  });

  it('should render an Logo component', () => {
    expect(date().find(Logo).length).toEqual(1);
  });
});
