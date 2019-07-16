import React from 'react';
import { shallow } from 'enzyme';

import MessagesGrid from '../MessagesGrid';
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
  const wrapper = shallow(<MessagesGrid />);
  expect(wrapper.exists()).toBe(true);
});

it('should render info messages', () => {
  const wrapper = shallow(<MessagesGrid messages={messages} />);
  expect(wrapper.find(Infos).exists()).toBe(true);
  expect(wrapper.find(Infos).prop('infos').length).toBe(3);
  expect(wrapper.find(Infos).prop('infos')).toEqual([
    { message: 'info1', priority: 3 },
    { message: 'info2', priority: 3 },
    { message: 'info3', priority: 3 },
  ]);
});

it('should render warning messages', () => {
  const wrapper = shallow(<MessagesGrid messages={messages} />);
  expect(wrapper.find(Warnings).exists()).toBe(true);
  expect(wrapper.find(Warnings).prop('warnings').length).toBe(2);
  expect(wrapper.find(Warnings).prop('warnings')).toEqual([
    { message: 'warning1', priority: 2 },
    { message: 'warning2', priority: 2 },
  ]);
});

it('should render error messages', () => {
  const wrapper = shallow(<MessagesGrid messages={messages} />);
  expect(wrapper.find(Errors).exists()).toBe(true);
  expect(wrapper.find(Errors).prop('errors').length).toBe(1);
  expect(wrapper.find(Errors).prop('errors')).toEqual([{ message: 'error1', priority: 1 }]);
});
