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

  it('should render its children', () => {
    children = <div>Main</div>;

    expect(main().contains(children)).toBe(true);
  });
});
