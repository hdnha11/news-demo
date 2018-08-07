import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Title from '../index';

describe('<Title />', () => {
  let props;
  let children;
  let renderedTitle;

  const title = () => {
    if (!renderedTitle) {
      renderedTitle = shallow(<Title {...props}>{children}</Title>);
    }

    return renderedTitle;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedTitle = undefined;
  });

  it('should render an <h3> tag', () => {
    expect(title().type()).toEqual('h3');
  });

  it('should render a prop', () => {
    props.id = 'testId';

    expect(title().prop('id')).toEqual(props.id);
  });

  it('should render its text', () => {
    children = 'Text';

    expect(title().contains(children)).toBe(true);
  });

  it('should show pointer when having onClick prop', () => {
    const tree = renderer.create(<Title onClick={jest.fn()} />).toJSON();

    expect(tree).toHaveStyleRule('cursor', 'pointer');
  });
});
