import React from 'react';
import { shallow } from 'enzyme';
import Media from '../Media';

describe('<Media />', () => {
  let props;
  let children;
  let renderedMedia;

  const media = () => {
    if (!renderedMedia) {
      renderedMedia = shallow(<Media {...props}>{children}</Media>);
    }

    return renderedMedia;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedMedia = undefined;
  });

  it('should render an <img> tag', () => {
    expect(media().type()).toEqual('img');
  });

  it('should have src prop', () => {
    props.src = 'fake-image-url';

    expect(media().props().src).toEqual(props.src);
  });
});
