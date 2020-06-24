import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('App Component', () => {

  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  test('renders', () => {
    expect(component.exists()).toBe(true);
  });

  test('contains Header component', () => {
    const wrapper = component.find('Header');
    expect(wrapper.length).toBe(1);
  })

  test('contains SignInCard component', () => {
    const wrapper = component.find('SignInCard');
    expect(wrapper.length).toBe(1);
  })
});
