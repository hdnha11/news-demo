import React from 'react';
import { shallow } from 'enzyme';
import LoadingImage from '../LoadingImage';

describe('<LoadingImage />', () => {
  let props;
  let children;
  let renderedLoadingImage;

  const loadingImage = () => {
    if (!renderedLoadingImage) {
      renderedLoadingImage = shallow(<LoadingImage {...props}>{children}</LoadingImage>);
    }

    return renderedLoadingImage;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedLoadingImage = undefined;
  });

  it('should render an <img> tag', () => {
    expect(loadingImage().type()).toEqual('img');
  });

  it('should have src prop', () => {
    props.src = 'fake-image-url';

    expect(loadingImage().props().src).toEqual(props.src);
  });
});
