import React from 'react';
import { shallow } from 'enzyme';

import Errors from '../Errors';
import Message from '../Message';

it('should render', () => {
  const wrapper = shallow(<Errors />);
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('.title').text()).toEqual('Error Type 1');
});

it('should render errors', () => {
  const messages = [{ message: 'error1', priority: 1 }, { message: 'error2', priority: 1 }];
  const wrapper = shallow(<Errors errors={messages} />);
  expect(wrapper.find(Message).length).toBe(2);
});

it('should display the count of errors', () => {
  const messages = [{ message: 'error1', priority: 1 }, { message: 'error2', priority: 1 }];
  const wrapper = shallow(<Errors errors={messages} />);
  expect(wrapper.find('.count').text()).toEqual('Count 2');
});
