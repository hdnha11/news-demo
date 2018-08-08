import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/Header';
import HomePage from '../../HomePage';
import App from '../index';

describe('<App />', () => {
  let props;
  let children;
  let renderedApp;

  const app = () => {
    if (!renderedApp) {
      renderedApp = shallow(<App {...props}>{children}</App>);
    }

    return renderedApp;
  };

  beforeEach(() => {
    props = undefined;
    children = undefined;
    renderedApp = undefined;
  });

  it('should render the header', () => {
    expect(app().find(Header).length).toBe(1);
  });

  it('should render the home page', () => {
    expect(app().find(HomePage).length).toBe(1);
  });
});
