import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';

describe('<Main />', () => {
  let props;
  let children;
  let renderedMain;

  const main = () => {
    if (!renderedMain) {
      renderedMain = shallow(<Main {...props}>{children}</Main>);
    }

    return renderedMain;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedMain = undefined;
  });

  it('should render an <div> tag', () => {
    expect(main().type()).toEqual('div');
  });

  it('should render a prop', () => {
    props.id = 'testId';

    expect(main().prop('id')).toEqual(props.id);
  });

  it('should render its children', () => {
    children = <div>Something to test</div>;

    expect(main().contains(children)).toBe(true);
  });
});
