import React from 'react';
import { shallow } from 'enzyme';

import MessagesTable from '../MessagesTable';
import Infos from '../Infos';
import Warnings from '../Warnings';
import Errors from '../Errors';

const messages = [
  { message: 'info1', priority: 3 },
  { message: 'info2', priority: 3 },
  { message: 'info3', priority: 3 },
  { message: 'warning1', priority: 2 },
  { message: 'warning2', priority: 2 },
  { message: 'error1', priority: 1 },
];

it('should render', () => {
  const wrapper = shallow(<MessagesTable />);
  expect(wrapper.exists()).toBe(true);
});

it('should render info messages', () => {
  const wrapper = shallow(<MessagesTable messages={messages} />);
  expect(wrapper.find(Infos).exists()).toBe(true);
  expect(wrapper.find(Infos).props('messages').length).toBe(3);
  expect(wrapper.find(Infos).props('messages')).toEqual([
    { message: 'info1', priority: 3 },
    { message: 'info2', priority: 3 },
    { message: 'info3', priority: 3 },
  ]);
});

it('should render warning messages', () => {
  const wrapper = shallow(<MessagesTable messages={messages} />);
  expect(wrapper.find(Warnings).exists()).toBe(true);
  expect(wrapper.find(Warnings).props('messages').length).toBe(2);
  expect(wrapper.find(Warnings).props('messages').length).toEqual([
    { message: 'warning1', priority: 2 },
    { message: 'warning2', priority: 2 },
  ]);
});

it('should render error messages', () => {
  const wrapper = shallow(<MessagesTable messages={messages} />);
  expect(wrapper.find(Errors).exists()).toBe(true);
  expect(wrapper.find(Errors).props('messages').length).toBe(1);
  expect(wrapper.find(Errors).props('messages').length).toEqual([
    { message: 'error1', priority: 1 },
  ]);
});
