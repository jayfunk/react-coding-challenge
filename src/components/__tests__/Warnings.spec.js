import React from 'react';
import { shallow } from 'enzyme';

import Warnings from '../Warnings';
import Message from '../Message';

it('should render', () => {
  const wrapper = shallow(<Warnings />);
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('.title').text()).toEqual('Warning Type 2');
});

it('should render warnings', () => {
  const messages = [{ message: 'warning1', priority: 2 }, { message: 'warning2', priority: 2 }];
  const wrapper = shallow(<Warnings infos={messages} />);
  expect(wrapper.find(Message).length).toBe(2);
});

it('should render warnings', () => {
  const messages = [{ message: 'warning1', priority: 2 }];
  const wrapper = shallow(<Warnings warnings={messages} />);
  expect(wrapper.find('.count').text()).toEqual('Count 1');
});
