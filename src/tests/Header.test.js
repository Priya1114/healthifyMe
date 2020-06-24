import React from 'react';
import { shallow } from'enzyme';

import Header from '../components/common/Header';

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  test('renders', () => {
    expect(component.exists()).toBe(true);
  });

  test('renders div with class header', () => {
    const wrapper = component.find('.header');
    expect(wrapper.length).toBe(1);
  })

  test('contains Logo Component', () => {
    const wrapper = component.find('Logo');
    expect(wrapper.length).toBe(1);
  });

})
