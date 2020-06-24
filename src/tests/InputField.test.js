import React from 'react';
import { shallow } from 'enzyme';

import InputField from '../components/common/InputField';

describe('InputField Component', () => {
  let component, props = {};
  beforeEach(() => {
    props = {
      data: {
        value: 'john@gmail.com',
        error: '',
      },
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email'
    }

    component = shallow(<InputField {...props} handleInputChange={() => {}} />);
  })

  test('renders', () => {
    expect(component.exists()).toBe(true);
  });
})
