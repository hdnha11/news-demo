import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Paragraph from '../index';

describe('<Paragraph />', () => {
  let props;
  let children;
  let renderedParagraph;

  const paragraph = () => {
    if (!renderedParagraph) {
      renderedParagraph = shallow(<Paragraph {...props}>{children}</Paragraph>);
    }

    return renderedParagraph;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedParagraph = undefined;
  });

  it('should render an <p> tag', () => {
    expect(paragraph().type()).toEqual('p');
  });

  it('should render a prop', () => {
    props.id = 'testId';

    expect(paragraph().prop('id')).toEqual(props.id);
  });

  it('should render its text', () => {
    children = 'Text';

    expect(paragraph().contains(children)).toBe(true);
  });

  it('should show pointer when having onClick prop', () => {
    const tree = renderer.create(<Paragraph onClick={jest.fn()} />).toJSON();

    expect(tree).toHaveStyleRule('cursor', 'pointer');
  });
});
