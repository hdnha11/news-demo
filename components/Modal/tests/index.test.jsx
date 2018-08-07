import React from 'react';
import { mount } from 'enzyme';
import Wrapper from '../Wrapper';
import Main from '../Main';
import Header from '../Header';
import ActionIcon from '../ActionIcon';
import Body from '../Body';
import Modal from '../index';

describe('<Modal />', () => {
  let props;
  let children;
  let renderedModal;

  const modal = () => {
    if (!renderedModal) {
      renderedModal = mount(<Modal {...props}>{children}</Modal>);
    }

    return renderedModal;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedModal = undefined;
  });

  it('should render an Wrapper component', () => {
    expect(modal().find(Wrapper).length).toEqual(1);
  });

  it('should render an Main component', () => {
    expect(modal().find(Main).length).toEqual(1);
  });

  it('should render an Header component', () => {
    expect(modal().find(Header).length).toEqual(1);
  });

  it('should render an ActionIcon component', () => {
    const icons = modal().find(ActionIcon);

    expect(icons.length).toEqual(1);
    expect(icons.first().props().children).toEqual('close');
  });

  it('should render an Body component', () => {
    expect(modal().find(Body).length).toEqual(1);
  });

  it('should render its children inside Body', () => {
    children = <div>Test</div>;
    const body = modal().find(Body).first();

    expect(body.contains(children)).toBe(true);
  });

  it('should handle click event on close button', () => {
    props.onClose = jest.fn();
    const closeBtn = modal().find(ActionIcon).first();

    closeBtn.simulate('click');

    expect(props.onClose).toHaveBeenCalled();
  });
});
