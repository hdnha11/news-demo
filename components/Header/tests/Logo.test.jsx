import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Logo';

describe('<Logo />', () => {
  let props;
  let children;
  let renderedLogo;

  const logo = () => {
    if (!renderedLogo) {
      renderedLogo = shallow(<Logo {...props}>{children}</Logo>);
    }

    return renderedLogo;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedLogo = undefined;
  });

  it('should render an <img> tag', () => {
    expect(logo().type()).toEqual('img');
  });

  it('should have src prop', () => {
    expect(logo().prop('src')).toEqual('IMAGE_MOCK');
  });
});
