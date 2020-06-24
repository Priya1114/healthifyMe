import React from 'react';
import { shallow } from 'enzyme';

import SignInCard from '../components/signIn/SignInCard';

describe('SignInCard Component', () => {

  let component;
  beforeEach(() => {
    component = shallow(<SignInCard />);
  });

  test('renders', () => {
    expect(component.exists()).toBe(true);
  });

  test('should render Logo Component', () => {
    const wrapper = component.find('Logo');
    expect(wrapper.length).toBe(1);
  });

  test('should render Form Component', () => {
    const wrapper = component.find('Form');
    expect(wrapper.length).toBe(1);
  })

  test('should not render SuccessBlock Component when Form is rendered', () => {
    const wrapper = component.find('SuccessBlock');
    expect(wrapper.length).toBe(0);
  })

});
