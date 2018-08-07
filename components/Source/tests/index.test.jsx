import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Source from '../index';

describe('<Source />', () => {
  let props;
  let children;
  let renderedSource;

  const source = () => {
    if (!renderedSource) {
      renderedSource = shallow(<Source {...props}>{children}</Source>);
    }

    return renderedSource;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedSource = undefined;
  });

  it('should render an <a> tag', () => {
    expect(source().type()).toEqual('a');
  });

  it('should render a prop', () => {
    props.id = 'testId';

    expect(source().prop('id')).toEqual(props.id);
  });

  it('should render its text', () => {
    children = 'Text';

    expect(source().contains(children)).toBe(true);
  });

  it('should show underline when mouseover', () => {
    const tree = renderer.create(<Source />).toJSON();

    expect(tree).toHaveStyleRule('text-decoration', 'underline', { modifier: ':hover' });
  });
});
