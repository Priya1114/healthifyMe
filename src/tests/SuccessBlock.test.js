import React from 'react';
import { shallow } from 'enzyme';

import SuccessBlock from '../components/signIn/SuccessBlock';

describe('SuccessBlock Component', () => {

  test('renders', () => {
    const component = shallow(<SuccessBlock />);
    expect(component.exists()).toBe(true);
  });

});
