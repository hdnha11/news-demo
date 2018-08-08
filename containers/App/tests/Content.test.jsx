import React from 'react';
import { shallow } from 'enzyme';
import Content from '../Content';

describe('<Content />', () => {
  let props;
  let children;
  let renderedContent;

  const content = () => {
    if (!renderedContent) {
      renderedContent = shallow(<Content {...props}>{children}</Content>);
    }

    return renderedContent;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedContent = undefined;
  });

  it('should render an <div> tag', () => {
    expect(content().type()).toEqual('div');
  });

  it('should render its children', () => {
    children = <div>Content</div>;

    expect(content().contains(children)).toBe(true);
  });
});
