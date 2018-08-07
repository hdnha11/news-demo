import React from 'react';
import { shallow } from 'enzyme';
import PlaceholderLoading from '../index';

describe('<PlaceholderLoading />', () => {
  let props;
  let children;
  let renderedPlaceholderLoading;

  const placeholderLoading = () => {
    if (!renderedPlaceholderLoading) {
      renderedPlaceholderLoading = shallow(<PlaceholderLoading {...props}>{children}</PlaceholderLoading>);
    }

    return renderedPlaceholderLoading;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedPlaceholderLoading = undefined;
  });

  it('should render an <div> tag', () => {
    expect(placeholderLoading().type()).toEqual('div');
  });

  it('should render a prop', () => {
    props.id = 'testId';

    expect(placeholderLoading().prop('id')).toEqual(props.id);
  });

  it('should render its children', () => {
    children = <div>Content</div>;

    expect(placeholderLoading().contains(children)).toBe(true);
  });
});
