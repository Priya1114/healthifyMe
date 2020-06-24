import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../components/common/Logo';

describe('Logo Component', () => {

  test('renders', () => {
    const component = shallow(<Logo />);
    expect(component.exists()).toBe(true);
  });

});