import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('<Header />', () => {
  let props;
  let children;
  let renderedHeader;

  const header = () => {
    if (!renderedHeader) {
      renderedHeader = shallow(<Header {...props}>{children}</Header>);
    }

    return renderedHeader;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedHeader = undefined;
  });

  it('should render an <header> tag', () => {
    expect(header().type()).toEqual('header');
  });

  it('should render its children', () => {
    children = <div>Test</div>;

    expect(header().contains(children)).toBe(true);
  });
});
