import React from 'react';
import { mount } from 'enzyme';
import Wrapper from '../Wrapper';
import Date from '../index';

describe('<Date />', () => {
  let props;
  let children;
  let renderedDate;

  const date = () => {
    if (!renderedDate) {
      renderedDate = mount(<Date {...props}>{children}</Date>);
    }

    return renderedDate;
  };

  beforeEach(() => {
    props = {};
    children = '2018-06-01T00:00:00+0000';
    renderedDate = undefined;
  });

  it('should render an Wrapper component', () => {
    expect(date().find(Wrapper).length).toEqual(1);
  });

  it('should not pass to Wrapper any props except children', () => {
    props = { id: 'id', className: 'class' };

    expect(Object.keys(date().find(Wrapper).first().props())).toEqual(['children']);
  });

  it('should have valid date format output', () => {
    expect(date().contains('Jun 01, 2018')).toEqual(true);
  });
});
