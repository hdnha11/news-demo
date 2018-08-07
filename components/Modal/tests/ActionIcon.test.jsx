import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ActionIcon from '../ActionIcon';

describe('<ActionIcon />', () => {
  let props;
  let children;
  let renderedActionIcon;

  const icon = () => {
    if (!renderedActionIcon) {
      renderedActionIcon = shallow(<ActionIcon {...props}>{children}</ActionIcon>);
    }

    return renderedActionIcon;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedActionIcon = undefined;
  });

  it('should render an <i> tag', () => {
    expect(icon().type()).toEqual('i');
  });

  it('should have material icons class', () => {
    expect(icon().prop('className')).toMatch(/material-icons/);
  });

  it('should render its children', () => {
    children = 'close';

    expect(icon().contains(children)).toBe(true);
  });

  it('should have cursor pointer', () => {
    const tree = renderer.create(<ActionIcon />).toJSON();

    expect(tree).toHaveStyleRule('cursor', 'pointer');
  });
});
