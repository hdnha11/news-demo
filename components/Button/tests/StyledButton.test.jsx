import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import StyledButton from '../StyledButton';

describe('<StyledButton />', () => {
  let props;
  let children;
  let renderedStyledButton;

  const styledButton = () => {
    if (!renderedStyledButton) {
      renderedStyledButton = shallow(<StyledButton {...props}>{children}</StyledButton>);
    }

    return renderedStyledButton;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedStyledButton = undefined;
  });

  it('should render an <button> tag', () => {
    expect(styledButton().type()).toEqual('button');
  });

  it('should render a prop', () => {
    props.id = 'testId';

    expect(styledButton().prop('id')).toEqual(props.id);
  });

  it('should render its text', () => {
    children = 'Text';

    expect(styledButton().contains(children)).toBe(true);
  });

  it('should render default button by default', () => {
    const tree = renderer.create(<StyledButton />).toJSON();

    expect(tree).toHaveStyleRule('height', '32px');
    expect(tree).toHaveStyleRule('line-height', '32px');
    expect(tree).toHaveStyleRule('padding', '0 14px');
    expect(tree).toHaveStyleRule('border-radius', '16px');
    expect(tree).toHaveStyleRule('background', '#d0d0d0');
  });

  it('should render big button if big prop was passed', () => {
    const tree = renderer.create(<StyledButton big />).toJSON();

    expect(tree).toHaveStyleRule('height', '42px');
    expect(tree).toHaveStyleRule('line-height', '42px');
    expect(tree).toHaveStyleRule('padding', '0 28px');
    expect(tree).toHaveStyleRule('border-radius', '21px');
  });

  it('should render outline button if outline prop was passed', () => {
    const tree = renderer.create(<StyledButton outline />).toJSON();

    expect(tree).toHaveStyleRule('background', 'transparent');
  });

  it('should show background when mouseover', () => {
    const tree = renderer.create(<StyledButton />).toJSON();

    expect(tree).toHaveStyleRule('background', '#bbbbbb', { modifier: ':hover' });
  });

  it('should show background as when mouseover on an outline button', () => {
    const tree = renderer.create(<StyledButton outline />).toJSON();

    expect(tree).toHaveStyleRule('background', 'transparent', {
      modifier: ':hover',
    });
  });
});
