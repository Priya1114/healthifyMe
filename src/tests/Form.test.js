import React from 'react';
import { shallow } from 'enzyme';

import Form from '../components/signIn/Form';

describe('Form Component', () => {

  let component, props = {};
  beforeEach(() => {
    props = {
      response: {
        status: 'in-progress',
      }
    }
    component = shallow(<Form {...props} />)
  })

  test('renders', () => {
    expect(component.exists()).toBe(true);
  });

  test('should render the form', () => {
    const wrapper = component.find('form');
    expect(wrapper.length).toBe(1);
  });

  test('should render two input fields', () => {
    const wrapper = component.find('InputField');
    expect(wrapper.length).toBe(2);
  });

  test('should render submit button', () => {
    const wrapper = component.find('button');
    expect(wrapper.length).toBe(1);
  });

  test('when form is submitted default event is cancelled', () => {
    const wrapper = component.find('form');
    let prevented = false;

    wrapper.simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    });

    expect(prevented).toBe(true);
  });


























});